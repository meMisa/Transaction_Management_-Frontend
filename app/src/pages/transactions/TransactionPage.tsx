// node modules
import * as React from 'react';
// components :
import TransactionListComponent from 'components/transactions/TransactionListComponent';
// actions
import {
  fetchTransactionListSuccess,
  fetchTransactionListError,
} from 'actions/transactionActions';
// apis
import transactionApis from 'apis/transactionApis';
// reducers
import { initialState, reducer } from 'reducers/transactionReducer';
// styles
import 'styles/transactions.css';

const TransactionPage: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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
      <TransactionListComponent transactions={state.transactions} />
    </>
  );
};

export default TransactionPage;
