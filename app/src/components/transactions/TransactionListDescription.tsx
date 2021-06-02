// node modules
import * as React from 'react';
import Text from 'antd/lib/typography/Text';
// reducers
import { Transactions } from 'reducers/transactionReducer';
// utils
import { formatDate } from 'utils/utilities';
// context
import { UserDetailContext } from 'components/layouts/TransactionLayout';

const TransactionListDescription = ({
  account_id,
  amount,
  balance,
  created_at,
  newRecord,
}: Transactions) => {
  // ************************************************* State **********************************************************
  const accountInfo = React.useContext(UserDetailContext);

  // ************************************************* FUNCTIONS ******************************************************
  const isCurrentUser = () => {
    return accountInfo.account_id === account_id || newRecord;
  };

  const makeDetails = () => {
    const currentUser = isCurrentUser();
    return `Transferred $${amount} , ${
      currentUser ? 'from' : 'to'
    } account : ${account_id} , created at : ${formatDate(created_at, true)}`;
  };

  return (
    <>
      {accountInfo.account_id && (
        <div
          data-type="transaction"
          data-account-id={account_id}
          data-amount={amount}
          data-balance={balance}
        >
          {makeDetails()}
          <br />
          {isCurrentUser() && (
            <Text italic strong mark>
              The current account balance is ${accountInfo.balance}
            </Text>
          )}
        </div>
      )}
    </>
  );
};

export default TransactionListDescription;
