import Dispatch from 'apis/client';

const urls = {
  accountById: (method: string, id: string) => {
    return {
      url: `/transaction-management/accounts/${id}`,
      method,
    };
  },
};

function api() {
  return {
    getAccount: (data: any) =>
      Dispatch(urls.accountById('get', data.params.id), {}, data.payload),
  };
}

export default api();
