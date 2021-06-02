import React, { useState, useEffect } from 'react';
import { Form, Modal } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

interface Props {
  initialValues: any;
  title: string;
  layout?: any;
  size?: any;
  width?: number;
  visible: boolean;
  submitForm?: any;
  onCancel: any;
  footer?: any;
  dataType: string;
  children: React.ReactNode | JSX.Element[] | JSX.Element;
}

const ModalForm = React.forwardRef<JSX.Element, Props>(
  (
    {
      children,
      initialValues,
      title,
      visible,
      submitForm,
      onCancel,
      width,
      size,
      footer,
      dataType,
    },
    ref,
  ) => {
    // ***************************************************** CONSTS ****************************************************
    const [form] = Form.useForm();
    const [spin, setSpin] = useState(false);

    // ***************************************************** FUNCS *****************************************************
    const onFinish = (values) => {
      setSpin(true);
      submitForm(values);
    };

    const onOk = () => {
      form.submit();
    };

    // ***************************************************** USE EFFECTS ***********************************************
    useEffect(() => {
      setSpin(false);
      form.resetFields();
      if (visible) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [visible]);

    // ***************************************************** USE REFS **************************************************
    // @ts-ignore
    React.useImperativeHandle(ref, () => ({
      setSpin,
    }));

    return (
      <Modal
        title={title}
        visible={visible}
        onOk={onOk}
        okButtonProps={{ loading: spin }}
        cancelButtonProps={{ disabled: spin }}
        onCancel={onCancel}
        width={width}
        footer={footer}
      >
        <Form
          {...formItemLayout}
          initialValues={initialValues}
          form={form}
          size={size}
          name="subscription"
          onFinish={onFinish}
          data-type={dataType}
          scrollToFirstError
        >
          {children}
        </Form>
      </Modal>
    );
  },
);

export default ModalForm;
