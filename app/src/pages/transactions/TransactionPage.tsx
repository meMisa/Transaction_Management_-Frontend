// node modules
import * as React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
// components :
import TransactionListComponent from 'components/transactions/TransactionListComponent';
import TransactionForm from 'components/transactions/TransactionForm';
import ModalForm from 'components/general/ModalForm';
// actions
import {
  fetchTransactionListSuccess,
  fetchTransactionListError,
  createTransactionSuccess,
} from 'actions/transactionActions';
// apis
import transactionApis from 'apis/transactionApis';
// reducers
import {
  initialState,
  NewTransaction,
  NewTransactionResponse,
  reducer,
  Transactions,
} from 'reducers/transactionReducer';
// hooks
import useModal from 'hooks/useModal';
// utils
import { showSuccessNotification } from 'utils/notifications';
// texts
import {
  NEW_TRANSACTION,
  ADD_NEW_TRANSACTION,
  GET_THE_TRANSACTIONS_LIST_SUCCESSFULLY,
} from 'constants/texts';
// styles
import 'styles/transactions.css';

const TransactionPage: React.FC = () => {
  // ***************************************************** STATES ***********************************************
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { isShowing, toggle } = useModal();
  const modalRef: any = React.useRef();

  // ***************************************************** FUNCTIONS ***********************************************
  const showModal = React.useCallback(() => {
    toggle('new-transaction');
  }, [isShowing]);

  const submitNewTransaction = React.useCallback((values: NewTransaction) => {
    transactionApis
      .postTransaction({ payload: values })
      .then((response: NewTransactionResponse) => {
        modalRef.current.setSpin(false);
        toggle('');
        dispatch(createTransactionSuccess(response));
      })
      .catch((error) => {
        modalRef.current.setSpin(false);
      });
  }, []);

  // ***************************************************** USE EFFECTS ***********************************************
  React.useEffect(() => {
    transactionApis
      .getTransactionList({})
      .then((response: Transactions[]) => {
        showSuccessNotification(GET_THE_TRANSACTIONS_LIST_SUCCESSFULLY);
        dispatch(fetchTransactionListSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchTransactionListError(error));
      });
  }, []);

  return (
    <>
      <Button
        className="margin-left-2 margin-top-1"
        type="primary"
        shape="round"
        icon={<PlusCircleOutlined />}
        size="large"
        onClick={showModal}
      >
        {NEW_TRANSACTION}
      </Button>
      <ModalForm
        ref={modalRef}
        initialValues={initialState.newTransaction}
        title={ADD_NEW_TRANSACTION}
        size="large"
        width={700}
        visible={isShowing === 'new-transaction'}
        dataType="transaction-form"
        submitForm={submitNewTransaction}
        onCancel={toggle}
      >
        <TransactionForm />
      </ModalForm>
      <TransactionListComponent transactions={state.transactions} />
    </>
  );
};

export default TransactionPage;
