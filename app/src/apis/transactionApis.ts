import Dispatch from 'apis/client';

const urls = {
  transactionList: (method) => {
    return {
      url: '/transaction-management/transactions',
      method,
    };
  },
};

function api() {
  return {
    getTransactionList: (data) =>
      Dispatch(urls.transactionList('get'), {}, data.payload),
  };
}

export default api();
