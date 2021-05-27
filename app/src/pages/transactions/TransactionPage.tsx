// node modules
import * as React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

// components :
import TransactionListComponent from 'components/transactions/TransactionListComponent';
import ModalForm from 'components/general/ModalForm';
// actions
import {
  fetchTransactionListSuccess,
  fetchTransactionListError,
} from 'actions/transactionActions';
// apis
import transactionApis from 'apis/transactionApis';
// reducers
import { initialState, reducer } from 'reducers/transactionReducer';
// hooks
import useModal from 'hooks/useModal';
// texts
import { NEW_TRANSACTION, ADD_NEW_TRANSACTION } from 'constants/texts';
// styles
import 'styles/transactions.css';

const TransactionPage: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { isShowing, toggle } = useModal();
  const modalRef = React.useRef();

  const showModal = () => {
    toggle('new-transaction');
  };
  const submitNewTransaction = (values) => {};
  React.useEffect(() => {
    transactionApis
      .getTransactionList({})
      .then((response) => {
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
        submitForm={submitNewTransaction}
        onCancel={toggle}
      >
        <div>Misa</div>
      </ModalForm>
      <TransactionListComponent transactions={state.transactions} />
    </>
  );
};

export default TransactionPage;
