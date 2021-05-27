import Dispatch from 'apis/client';

const urls = {
  transaction: (method) => {
    return {
      url: '/transaction-management/transactions',
      method,
    };
  },
  transactionById: (method, id) => {
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
