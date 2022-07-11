const converter = (euro) => {
  let convertationToRouble = euro;

  convertationToRouble *= 1.2 * 73;

  return convertationToRouble;
};

console.log('Сумма в рублях составляет: ' +
converter(Number(prompt('Введите сумму: ', 10))));