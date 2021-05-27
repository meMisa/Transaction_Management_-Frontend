// actions
import { Action, TransactionAction } from 'actions/transactionActions';

export interface NewTransaction {
  account_id: string;
  amount: number;
}
export interface Transactions extends NewTransaction {
  transaction_id: string;
  balance?: string;
  created_at: string;
}

export interface State {
  transactions: Transactions[];
  newTransaction: NewTransaction;
}

export const initialState: State = {
  transactions: [],
  newTransaction: { account_id: '', amount: 0 },
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case TransactionAction.GET_TRANSACTION_LIST_REQUEST:
      return {
        ...state,
      };

    case TransactionAction.GET_TRANSACTION_LIST_SUCCESS:
      const transactions = action.payload;
      return { ...state, transactions };

    case TransactionAction.GET_TRANSACTION_LIST_ERROR:
      return {
        ...state,
      };

    default: {
      return state;
    }
  }
}
