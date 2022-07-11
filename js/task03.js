const calculate = (priceSum, itemAmount, promocode) => {
  let basketPriceSum = priceSum;
  let basketItemAmount = itemAmount;
  let basketPromocode = promocode;

  if (basketItemAmount >= 10) {
    basketPriceSum *= 0.97;
  }

  if ((basketPriceSum - 30000) >= 0) {
    basketPriceSum *= 0.85;
  }

  if (basketPromocode === 'METHED') {
    basketPriceSum *= 0.9;
  }

  if (basketPromocode === 'G3H2Z1' && (priceSum - basketPriceSum) >= 2000) {
    basketPriceSum -= 500;
  }

  return basketPriceSum;
}

console.log('Стоимость ваших товаров с учетом скидок : ' +
calculate(Number(prompt('Общая сумма корзины: ', 200)),
Number(prompt('Количество товар в корзине: ', 5)),
prompt('Промокод: ', 'текст')));

// console.log(calculate(50000, 9, 'G3H2Z1'))