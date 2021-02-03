const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const ln2 = 0.693;

module.exports = function dateSample(sampleActivity) {

  if (typeof(sampleActivity) === "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < MODERN_ACTIVITY) {
    return Math.ceil((MODERN_ACTIVITY / parseFloat(sampleActivity)) /(ln2 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};
