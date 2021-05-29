// node modules
import { default as React, useState, useEffect } from 'react';
// types
import { AccountInfoI } from 'types/accountTypes';
// apis
import accountApis from 'apis/accountApis';
import { CURRENT_USER } from 'apis/client';

const AccountInfo = {
  account_id: '',
  balance: 0,
};
const useAccountInfo = () => {
  const [userInfo, setUserInfo] = useState<AccountInfoI>(AccountInfo);

  useEffect(() => {
    accountApis
      .getAccount({ params: { id: CURRENT_USER } })
      .then((response: AccountInfoI) => {
        setUserInfo(response);
      })
      .catch((error) => {});
  }, []);

  return {
    userInfo,
  };
};

export default useAccountInfo;
