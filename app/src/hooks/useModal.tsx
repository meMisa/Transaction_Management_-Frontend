import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState('');

  function toggle(modal) {
    setIsShowing(modal);
  }

  return {
    isShowing,
    toggle,
  };
};

export default useModal;
