export const formatErrorMessages = (errors = []) => {
  return typeof errors === 'string' ? errors : errors.join(' , ');
};
export const formatDate = (date: string, time: boolean) => {
  if (date) {
    const currentTime = new Date(date);
    const month = `0${currentTime.getMonth() + 1}`.slice(-2);
    const day = `0${currentTime.getDate()}`.slice(-2);
    const year = currentTime.getFullYear();
    if (time) {
      const minutes = currentTime.getMinutes();
      const hours = currentTime.getHours();
      return `${year}-${month}-${day} & ${('0' + hours).slice(-2)}:${(
        '0' + minutes
      ).slice(-2)}`;
    }
    // 2018-07-22 yyyy-MM-dd
    return `${year}-${month}-${day}`;
  }
  return '';
};
