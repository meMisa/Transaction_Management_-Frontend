import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import TransactionListDescription from 'components/transactions/TransactionListDescription';
import { Transactions } from 'reducers/transactionReducer';
import { UserDetailContext } from 'components/layouts/TransactionLayout';

// if props are long so it could be separate in another file
const item: Transactions = {
  transaction_id: '174df022-54f8-4eb7-86e8-f851940a01db',
  account_id: 'a31a9c62-001b-40c5-8903-48318555b4e7',
  amount: 1363,
  balance: 1363,
  created_at: '',
  newRecord: false,
};

beforeEach(() => {
  cleanup();
});

test('1.should render TransactionListDescription component correctly when accountInfo is null', () => {
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

it('2.Context value is updated by accountInfo context when is not the current user:', () => {
  const accountIno = {
    account_id: '174df022-54f8-4eb7-86e8-f851940a01db',
    balance: 1363,
  };

  const { container, getByText } = render(
    <UserDetailContext.Provider value={accountIno}>
      <TransactionListDescription {...item} />
    </UserDetailContext.Provider>,
  );

  expect(getByText(/Transferred/i).textContent).toBe(
    'Transferred $1363 , to account : a31a9c62-001b-40c5-8903-48318555b4e7 , created at : ',
  );
  expect(container).toContainHTML('<br />');
  expect(container).not.toHaveTextContent('The current account balance is');
});

it('3.Context value is updated by accountInfo context when is the current user:', () => {
  const accountIno = {
    account_id: 'a31a9c62-001b-40c5-8903-48318555b4e7',
    balance: 1363,
  };

  const { container, getByText } = render(
    <UserDetailContext.Provider value={accountIno}>
      <TransactionListDescription {...item} />
    </UserDetailContext.Provider>,
  );

  expect(getByText(/The current/i).textContent).toBe(
    'The current account balance is $1363',
  );
  expect(container).toContainHTML(
    '<span class="ant-typography"><i><mark><strong>The current account balance is $1363</strong></mark></i></span>',
  );
});
