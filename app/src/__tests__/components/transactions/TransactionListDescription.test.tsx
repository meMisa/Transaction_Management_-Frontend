import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import TransactionListDescription from 'components/transactions/TransactionListDescription';
import { Transactions } from 'reducers/transactionReducer';

// if props are long so it could be separate in another file
const item: Transactions = {
  transaction_id: '174df022-54f8-4eb7-86e8-f851940a01db',
  account_id: 'a31a9c62-001b-40c5-8903-48318555b4e7',
  amount: 1363,
  balance: 1363,
  created_at: '',
  newRecord: false,
};

test('should render TransactionListDescription component correctly when accountInfo is null', () => {
  expect(true).toBe(true);

  render(<TransactionListDescription {...item} />);
  const transactionListDescription = screen.getByTestId(
    'transaction-list-description',
  );
  expect(transactionListDescription).toBeInTheDocument();

  expect(transactionListDescription).not.toContainHTML(
    '<div\n' +
      '          data-type="transaction"\n' +
      '          data-account-id={account_id}\n' +
      '          data-amount={amount}\n' +
      '          data-balance={balance}\n' +
      '        >',
  );
});
