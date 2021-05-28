// node modules
import * as React from 'react';
import { Layout } from 'antd';
// components
import HeaderComponent from 'components/general/HeaderComponent';
import SidebarComponent from 'components/general/SidebarComponent';
// apis
import accountApis from 'apis/accountApis';
import { CURRENT_USER } from 'apis/client';
// types
import { AccountInfo } from 'types/accountTypes';

export const UserDetailContext = React.createContext(null);

const { Content } = Layout;

const TransactionLayout = ({ children }) => {
  // ************************************************* State **********************************************************
  const [userInfo, setUserInfo] = React.useState<AccountInfo>({
    account_id: '',
    balance: 0,
  });

  // ************************************************* Use Effect *****************************************************
  React.useEffect(() => {
    accountApis
      .getAccount({ params: { id: CURRENT_USER } })
      .then((response: AccountInfo) => {
        setUserInfo(response);
      })
      .catch((error) => {});
  }, []);
  return (
    <UserDetailContext.Provider value={userInfo}>
      <Layout hasSider className="site-layout-background">
        <SidebarComponent />
        <Layout>
          <HeaderComponent {...userInfo} />
          <Content
            className="site-layout-background"
            style={{
              padding: '10px 0 10px 0',
              margin: 0,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </UserDetailContext.Provider>
  );
};

export default TransactionLayout;
