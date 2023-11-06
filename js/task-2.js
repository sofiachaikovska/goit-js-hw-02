function formatMessage(message, maxLength) {
  const length = message.length;
  if (length <= maxLength) {
    return message;
  } else if (length > maxLength) {
    temp = message.slice(0, maxLength);
    return temp + '...';
  }
}

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
