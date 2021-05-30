import Dispatch from 'apis/client';

const urls = {
  transaction: (method: string) => {
    return {
      url: '/transaction-management/transactions',
      method,
    };
  },
  transactionById: (method: string, id: string) => {
    return {
      url: `/transaction-management/transactions/${id}`,
      method,
    };
  },
};

function api() {
  return {
    getTransactionList: (data) =>
      Dispatch(urls.transaction('get'), {}, data.payload),
    postTransaction: (data) =>
      Dispatch(urls.transaction('post'), {}, data.payload),
    getTransaction: (data) =>
      Dispatch(urls.transactionById('get', data.params.id), {}, data.payload),
  };
}

export default api();
