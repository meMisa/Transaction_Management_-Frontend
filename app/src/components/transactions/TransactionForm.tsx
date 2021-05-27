// node modules
import * as React from 'react';
import { Form, Input, InputNumber } from 'antd';
// texts
import { ACCOUNT_ID, AMOUNT, THIS_FIELD_IS_REQUIRED } from 'constants/texts';

const TransactionForm = (props: { mode: string }) => {
  return (
    <>
      <Form.Item
        label={ACCOUNT_ID}
        name="account_id"
        rules={[
          {
            required: true,
            message: THIS_FIELD_IS_REQUIRED,
          },
        ]}
      >
        <Input
          data-type="account-id"
          size="large"
          bordered={false}
          placeholder={ACCOUNT_ID}
          className="transaction-form-item"
          disabled={props.mode === 'edit'}
        />
      </Form.Item>
      <Form.Item
        label={AMOUNT}
        name="amount"
        rules={[
          {
            required: true,
            message: THIS_FIELD_IS_REQUIRED,
          },
        ]}
      >
        <InputNumber
          data-type="amount"
          size="large"
          bordered={false}
          placeholder={AMOUNT}
          className="transaction-form-item"
          type="number"
          disabled={props.mode === 'edit'}
        />
      </Form.Item>
    </>
  );
};

export default TransactionForm;
