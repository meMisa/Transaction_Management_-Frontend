// node modules
import * as React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';
import { TransactionOutlined, SettingOutlined } from '@ant-design/icons';
// texts
import { TRANSACTIONS, SETTINGS } from 'constants/texts';

const SidebarMenuComponent = () => {
  const history = useHistory();
  const pathName = history.location.pathname;

  const returnIconClass = React.useCallback(
    (path: string) => {
      return pathName === path
        ? 'active-sidebar-icon-transaction'
        : 'transaction';
    },
    [pathName],
  );

  const menus = React.useMemo(
    () => [
      {
        key: 'transactions',
        pathName: '/transactions',
        menuClassName: 'sidebar-menu',
        activeClassName: 'panel-active-menu-item',
        colClassName: 'sidebar-icon-common',
        title: TRANSACTIONS,
        icon: (
          <TransactionOutlined className={returnIconClass('/transactions')} />
        ),
      },
      {
        key: 'settings',
        pathName: '/settings',
        menuClassName: 'sidebar-menu',
        activeClassName: 'panel-active-menu-item',
        colClassName: 'sidebar-icon-common',
        title: SETTINGS,
        icon: <SettingOutlined className={returnIconClass('/settings')} />,
      },
    ],
    [pathName],
  );

  return (
    <Menu mode="inline" selectedKeys={[history.location.pathname]}>
      {/**************************************************** Transactions PART ***************************************/}
      {menus.map((menu) => (
        <Menu.Item key={menu.pathName} className={menu.menuClassName}>
          <NavLink exact to={menu.key} activeClassName={menu.activeClassName}>
            <Row>
              <Col offset={1} className={menu.colClassName}>
                {menu.icon}
              </Col>
              <Col offset={2}>
                <span
                  className={`font-weight-bold ${
                    pathName === menu.pathName
                      ? 'sidebar-active-color'
                      : 'sidebar-color'
                  }`}
                >
                  {menu.title}
                </span>
              </Col>
            </Row>
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SidebarMenuComponent;
