import Dispatch from 'apis/client';

const urls = {
  transaction: (method) => {
    return {
      url: '/transaction-management/transactions',
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
  };
}

export default api();
