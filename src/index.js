const readableNumbersTableOneTen = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
}

const readableNumbersTableTenTwenty = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
}

const readableNumbersTableTwentyHundred = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
}

const hundred = 'hundred';

module.exports = function toReadable (number) {
  let phrase = String(number);
  if (number === 0) return  'zero';
  let arr = [...String(number).split('')];
  let result = '';
  let ones = (arr[arr.length-2] !== '1' && arr[arr.length-1] !== '0') ? readableNumbersTableOneTen[arr[arr.length-1]] : '';
  let tens = (phrase.slice(-2,-1) === '1') ? readableNumbersTableTenTwenty[phrase.slice(-2)] : readableNumbersTableTwentyHundred[arr[arr.length-2]] || '';
  let hundreds = (readableNumbersTableOneTen[arr[arr.length-3]]) ? `${readableNumbersTableOneTen[arr[arr.length-3]]} ${hundred}` : '';

  result = `${hundreds} ${tens} ${ones}`;
  return result.replace(/\s+/g, ' ').trim();
}
