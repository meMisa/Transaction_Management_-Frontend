// node modules
import * as React from 'react';
import { List, Avatar, Typography } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
// components
import TransactionForm from './TransactionForm';
import TransactionListDescription from './TransactionListDescription';
import ModalForm from 'components/general/ModalForm';
// hooks
import useModal from 'hooks/useModal';
// reducers
import { Transactions } from 'reducers/transactionReducer';
//apis
import transactionApis from 'apis/transactionApis';
// texts
import { EDIT_NEW_TRANSACTION, ITEMS } from 'constants/texts';

const TransactionListComponent = (props: { transactions: Transactions[] }) => {
  const [selectedTransaction, setSelectedTransaction] = React.useState(null);
  const { isShowing, toggle } = useModal();

  const getSelectedTransaction = React.useCallback((transaction) => {
    transactionApis
      .getTransaction({ params: { id: transaction.transaction_id } })
      .then((response) => {
        toggle('edit-transaction');
        setSelectedTransaction(response);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <List
        header={
          <Typography.Title level={3}>
            {props.transactions.length} {ITEMS}
          </Typography.Title>
        }
        className="padding-2 transaction-list-wrapper"
        loading={!props.transactions.length}
        itemLayout="horizontal"
        dataSource={props.transactions}
        renderItem={(item) => (
          <List.Item
            actions={[
              <EyeOutlined
                className="cursor-pointer"
                onClick={() => getSelectedTransaction(item)}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a>{item.transaction_id}</a>}
              description={<TransactionListDescription {...item} />}
            />
          </List.Item>
        )}
      />
      <ModalForm
        initialValues={selectedTransaction}
        title={EDIT_NEW_TRANSACTION}
        size="large"
        width={700}
        visible={isShowing === 'edit-transaction'}
        dataType="transaction-form"
        onCancel={toggle}
        footer={null}
      >
        <TransactionForm mode="edit" />
      </ModalForm>
    </>
  );
};

export default TransactionListComponent;
