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
        if (number = 0) phrase = 'zero';
        if (number > 0 && number < 10) {
          for(let i=0;i<number;i++) {
            phrase = readableNumbersTableOneTen[number];
          }
        }
        if (number >= 10 && number < 20) {
          for(let i=0;i<number;i++) {
            phrase = readableNumbersTableTenTwenty[number];
          }
        }
        if (number >= 20 && number < 100) {
          for(let i=0;i<number;i++) {
            let arr = [...String(number).split('')];
            phrase = `${readableNumbersTableTwentyHundred[arr[0]]} ${readableNumbersTableOneTen[arr[1]]}`;
          }
        }
        if (number >= 10 && number < 1000) {
          for(let i=0;i<number;i++) {
            let arr = [...String(number).split('')];
            phrase = `${readableNumbersTableOneTen[arr[0]]} ${hundred} ${readableNumbersTableTwentyHundred[arr[1]]} ${readableNumbersTableOneTen[arr[2]]}`;
          }
        }
        return phrase;
}
