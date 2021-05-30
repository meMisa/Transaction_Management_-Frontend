import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitFor,
  screen,
} from '@testing-library/react';

import TransactionListComponent from 'components/transactions/TransactionListComponent';
import TransactionForm from 'components/transactions/TransactionForm';
import { Transactions } from 'reducers/transactionReducer';

// if props are long so it could be separate in another file
const transactions: Transactions[] = [
  {
    account_id: '03f94fb2-53c3-4ad4-a3a3-9fa1e4704519',
    amount: 18,
    created_at: '2021-05-18T21:34:05.887886+00:00',
    transaction_id: 'aaf3bc77-a418-4661-afa8-5632883a93c1',
  },
  {
    account_id: '801d4704-0375-46af-8cbc-2acc17c2e11f',
    amount: 3,
    created_at: '2021-05-28T11:42:03.259262+00:00',
    transaction_id: '44fed458-c735-4535-909b-418795057322',
  },
];

const handleClick = jest.fn();

const axiosMock = {
  // @ts-ignore
  get: jest.fn().mockResolvedValue(),
};

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    value: jest.fn(() => {
      return {
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    }),
  });
});

afterEach(() => {
  cleanup();
});

test('1.should render TransactionList component correctly', () => {
  render(<TransactionListComponent transactions={transactions} />);
  const transactionList = screen.getByTestId('transaction-list-component');
  expect(transactionList).toBeInTheDocument();
});

test('2.call mock fn on view a list', () => {
  render(<TransactionListComponent transactions={transactions} />);
  const icon = screen.getByTestId(transactions[0].transaction_id);
  icon.onclick = handleClick;
  fireEvent.click(icon);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// I know it could be better
test('3.moxios and show the modal', async () => {
  const { getByTestId } = render(
    <TransactionListComponent transactions={transactions} />,
  );
  const icon = getByTestId(transactions[1].transaction_id);
  fireEvent.click(icon);
  expect(handleClick).toHaveBeenCalledTimes(0);

  axiosMock.get.mockResolvedValueOnce({ data: transactions[1] });
  render(<TransactionForm mode="edit" />);
  await waitFor(() => {
    expect(screen.getByTestId('transaction-form')).toBeInTheDocument();
  });
});
