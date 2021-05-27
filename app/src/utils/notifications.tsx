import * as React from 'react';
import { notification } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { SUCCESS, ERROR, GOOD_LOCK, SOMETHING_IS_WRONG } from 'constants/texts';

const showSuccessNotification = (message) => {
  notification['success']({
    message: SUCCESS,
    description: message || GOOD_LOCK,
    placement: 'bottomRight',
    duration: 5,
    className: 'success-alert',
    icon: <CheckCircleFilled style={{ color: '#26bb50' }} />,
  });
};

const showErrorNotification = (message) => {
  notification['error']({
    message: ERROR,
    description: message || SOMETHING_IS_WRONG,
    placement: 'bottomRight',
    duration: 9,
    className: 'error-alert',
    icon: <CloseCircleFilled style={{ color: '#ff3b30' }} />,
  });
};

export { showSuccessNotification, showErrorNotification };
