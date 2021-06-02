// node modules
import * as React from 'react';
import {List, Avatar, Typography, Menu} from 'antd';
import {EyeOutlined} from '@ant-design/icons';
// components
import TransactionForm from './TransactionForm';
import TransactionListDescription from './TransactionListDescription';
import ModalForm from 'components/general/ModalForm';
// hooks
import useModal from 'hooks/useModal';
// reducers
import {Transactions} from 'reducers/transactionReducer';
//apis
import transactionApis from 'apis/transactionApis';
// texts
import {EDIT_NEW_TRANSACTION, ITEMS} from 'constants/texts';

const TransactionListComponent = (props: { transactions: Transactions[] }) => {
  {
    /**************************************************** STATES ******************************************************/
  }
  const [selectedTransaction, setSelectedTransaction] = React.useState(null);
  const {isShowing, toggle} = useModal();

  {
    /************************************************* FUNCTIONS ******************************************************/
  }
  const getSelectedTransaction = React.useCallback((transaction) => {
    transactionApis
      .getTransaction({params: {id: transaction.transaction_id}})
      .then((response) => {
        setSelectedTransaction(response);
        toggle('edit-transaction');
      })
      .catch((error) => {
      });
  }, []);

  return (
    <>
      {
        props.transactions.map((item, index) => (
          <div
            key={index}
            data-type="transaction"
            data-account-id={item.account_id}
            data-amount={item.amount}
            data-balance={item.balance}
          >
            <TransactionListDescription {...item}/>
          </div>
        ))
      }
    </>
  );
};

export default TransactionListComponent;
