// node modules
import * as React from 'react';
import { List, Avatar } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { Transactions } from 'reducers/transactionReducer';

const TransactionListComponent = (props: { transactions: Transactions[] }) => {
  return (
    <List
      className="padding-2 transaction-list-wrapper"
      loading={!props.transactions.length}
      itemLayout="horizontal"
      dataSource={props.transactions}
      renderItem={(item) => (
        <List.Item actions={[<EditOutlined className="cursor-pointer" />]}>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://ant.design">{item.account_id}</a>}
            description={
              <div
                data-type="transaction"
                data-account-id={item.account_id}
                data-amount={item.amount}
                data-balance={item.balance}
              >
                Transferred ${item.amount} from account ${item.account_id}
                <br />
                {item.balance && (
                  <span>The current account balance is ${item.balance}</span>
                )}
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default TransactionListComponent;
