// actions
import { Action, TransactionAction } from 'actions/transactionActions';

export interface Transactions {
  account_id: string;
  transaction_id: string;
  amount: number;
  balance: string;
  created_at: string;
}

export interface State {
  transactions: Transactions[];
}

export const initialState: State = {
  transactions: [],
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
