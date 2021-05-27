// node modules
import * as React from 'react';
import { List, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
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
// utils
import { formatDate } from 'utils/utilities';
// texts
import { EDIT_NEW_TRANSACTION } from 'constants/texts';

const TransactionListComponent = (props: { transactions: Transactions[] }) => {
  const [selectedTransaction, setSelectedTransaction] = React.useState(null);
  const { isShowing, toggle } = useModal();

  const getSelectedTransaction = (transaction) => {
    transactionApis
      .getTransaction({ params: { id: transaction.transaction_id } })
      .then((response) => {
        toggle('edit-transaction');
        setSelectedTransaction(response);
      })
      .catch((error) => {});
  };

  return (
    <>
      <List
        className="padding-2 transaction-list-wrapper"
        loading={!props.transactions.length}
        itemLayout="horizontal"
        dataSource={props.transactions}
        renderItem={(item) => (
          <List.Item
            actions={[
              <EditOutlined
                className="cursor-pointer"
                onClick={() => getSelectedTransaction(item)}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a>{item.account_id}</a>}
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
