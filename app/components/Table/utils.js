/* eslint-disable no-restricted-globals */
import numeral from 'numeral';

export const format = (value, isPercentage, numeralFormat) => {
  let valueStr = 'N/A';
  if (value === null || isNaN(value)) {
    valueStr = 'N/A';
  } else {
    valueStr = numeral(value).format(numeralFormat);
    if (isPercentage) {
      valueStr = `${valueStr}%`;
    }
  }
  return valueStr;
};
