export enum TransactionAction {
  GET_TRANSACTION_LIST_REQUEST = '@@transactions/GET_TRANSACTION_LIST_REQUEST',
  GET_TRANSACTION_LIST_SUCCESS = '@@users/GET_TRANSACTION_LIST_SUCCESS',
  GET_TRANSACTION_LIST_ERROR = '@@users/GET_TRANSACTION_LIST_ERROR',
}

export type Action =
  | { type: TransactionAction.GET_TRANSACTION_LIST_REQUEST }
  | {
      type: TransactionAction.GET_TRANSACTION_LIST_SUCCESS;
      payload: any;
    }
  | {
      type: TransactionAction.GET_TRANSACTION_LIST_ERROR;
      payload: any;
    };

export function fetchTransactionListRequest(): Action {
  return { type: TransactionAction.GET_TRANSACTION_LIST_REQUEST };
}

export function fetchTransactionListSuccess(payload: any): Action {
  return { type: TransactionAction.GET_TRANSACTION_LIST_SUCCESS, payload };
}

export function fetchTransactionListError(payload: any): Action {
  return { type: TransactionAction.GET_TRANSACTION_LIST_ERROR, payload };
}
