// node modules
import * as React from 'react';
// reducers
import { Transactions } from 'reducers/transactionReducer';
// utils
import { formatDate } from 'utils/utilities';

const TransactionListDescription = ({
  account_id,
  amount,
  balance,
  created_at,
}: Transactions) => {
  return (
    <div
      data-type="transaction"
      data-account-id={account_id}
      data-amount={amount}
      data-balance={balance}
    >
      Transferred ${amount} from account ${account_id} created at :{' '}
      {formatDate(created_at, true)}
      <br />
      {balance && <span>The current account balance is ${balance}</span>}
    </div>
  );
};

export default TransactionListDescription;
