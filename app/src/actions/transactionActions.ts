import {
  Transactions,
  NewTransaction,
  NewTransactionResponse,
} from 'reducers/transactionReducer';

export enum TransactionAction {
  GET_TRANSACTION_LIST_REQUEST = '@@transactions/GET_TRANSACTION_LIST_REQUEST',
  GET_TRANSACTION_LIST_SUCCESS = '@@users/GET_TRANSACTION_LIST_SUCCESS',
  GET_TRANSACTION_LIST_ERROR = '@@users/GET_TRANSACTION_LIST_ERROR',
  POST_TRANSACTION_REQUEST = '@@transactions/POST_TRANSACTION_REQUEST',
  POST_TRANSACTION_SUCCESS = '@@users/POST_TRANSACTION_SUCCESS',
  POST_TRANSACTION_ERROR = '@@users/POST_TRANSACTION_ERROR',
  GET_TRANSACTION_BY_ID_REQUEST = '@@transactions/GET_TRANSACTION_BY_ID_REQUEST',
  GET_TRANSACTION_BY_ID_SUCCESS = '@@users/GET_TRANSACTION_BY_ID_SUCCESS',
  GET_TRANSACTION_BY_ID_ERROR = '@@users/GET_TRANSACTION_BY_ID_ERROR',
}

export type Action =
  | { type: TransactionAction.GET_TRANSACTION_LIST_REQUEST }
  | {
      type: TransactionAction.GET_TRANSACTION_LIST_SUCCESS;
      payload: Transactions[];
    }
  | {
      type: TransactionAction.GET_TRANSACTION_LIST_ERROR;
      payload: any;
    }
  | {
      type: TransactionAction.POST_TRANSACTION_REQUEST;
      payload: NewTransaction;
    }
  | {
      type: TransactionAction.POST_TRANSACTION_SUCCESS;
      payload: any;
    }
  | {
      type: TransactionAction.POST_TRANSACTION_ERROR;
      payload: any;
    }
  | { type: TransactionAction.GET_TRANSACTION_BY_ID_REQUEST }
  | {
      type: TransactionAction.GET_TRANSACTION_BY_ID_SUCCESS;
      payload: NewTransactionResponse;
    }
  | {
      type: TransactionAction.GET_TRANSACTION_BY_ID_ERROR;
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

export function createTransactionRequest(payload: NewTransaction): Action {
  return { type: TransactionAction.POST_TRANSACTION_REQUEST, payload };
}

export function createTransactionSuccess(payload: any): Action {
  return { type: TransactionAction.POST_TRANSACTION_SUCCESS, payload };
}

export function createTransactionError(payload: any): Action {
  return { type: TransactionAction.POST_TRANSACTION_ERROR, payload };
}

export function fetchTransactionByIdRequest(): Action {
  return { type: TransactionAction.GET_TRANSACTION_BY_ID_REQUEST };
}

export function fetchTransactionByIdSuccess(
  payload: NewTransactionResponse,
): Action {
  return { type: TransactionAction.GET_TRANSACTION_BY_ID_SUCCESS, payload };
}

export function fetchTransactionByIdError(payload: any): Action {
  return { type: TransactionAction.GET_TRANSACTION_BY_ID_ERROR, payload };
}
