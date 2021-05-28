import Dispatch from 'apis/client';

const urls = {
  accountById: (method, id) => {
    return {
      url: `/transaction-management/accounts/${id}`,
      method,
    };
  },
};

function api() {
  return {
    getAccount: (data) =>
      Dispatch(urls.accountById('get', data.params.id), {}, data.payload),
  };
}

export default api();
