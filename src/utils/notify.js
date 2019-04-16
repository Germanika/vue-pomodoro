const notify = (message) => {
  if (!('Notification' in window)) {
    // Desktop notifications not supported, send basic alert instead.
    alert(message); /* eslint-disable-line no-alert */
  } else if (Notification.permission === 'granted') {
    // eslint-disable-next-line no-new
    new Notification(message);
  }
};

export default notify;
