const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

module.exports = function check(str, bracketsConfig) {
  let bracketsPair = bracketsConfig.map(item => item.join(''));
  let length = str.length;

  for (i = 0; i < length; i++) {
    for (let j = 0; j < bracketsPair.length; j++) {
      if (str.includes(bracketsPair[j])) {
        str = str.replace(bracketsPair[j], '');
        console.log(str);
        --length;
      }
    }
  }

  return (str === '') ? true : false;

}
