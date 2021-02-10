const CustomError = require("../extensions/custom-error");


  module.exports = function repeater(str, options) {
  
    const repeatTimes=options.repeatTimes || 1;
    const separator=options.separator || '+';
    let addition=options.addition
    const additionRepeatTimes=options.additionRepeatTimes || 1;
    const additionSeparator=options.additionSeparator || '|';
    if (addition===undefined) {
      addition=''
    }
 
let additionArr=[]
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(String(addition));
    }
    const resultAddition = additionArr.join(additionSeparator);
  
  let strArr=[]
    for (let i = 0; i < repeatTimes; i++) {
      strArr.push(String(str) + resultAddition)
    }
 return strArr.join(separator);

  };

  