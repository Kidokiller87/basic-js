const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (value=true) {
    this.value=value
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Not implementedrequired parameters are missing');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let res=[];
    let ii=0;
    for (let i=0; i<message.length; i++) {
      if (alphabet.indexOf(message[i])===-1) {
        res.push(message[i]);
       } else {
        let num = (alphabet.indexOf(message[i])+alphabet.indexOf(key[ii])) % 26;
        res.push(alphabet[num]);
        ii===key.length-1 ? ii=0 : ii+=1 
      } 
    }
    return (this.value===false) ? res.reverse().join('') : res.join('');
  }
    
       
  decrypt(decryptMessage,key) {
    if (!decryptMessage || !key) {
      throw new Error('Not implementedrequired parameters are missing');
    }
    decryptMessage = decryptMessage.toUpperCase();
    key = key.toUpperCase();
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let res=[];
    let ii=0;
    for (let i=0; i<decryptMessage.length; i++) {
      if (alphabet.indexOf(decryptMessage[i])===-1) {
        res.push(decryptMessage[i]);
       } else {
        let num = (alphabet.indexOf(decryptMessage[i]) - alphabet.indexOf(key[ii]) + 26) % 26;
        res.push(alphabet[num]);
        ii===key.length-1 ? ii=0 : ii+=1 
      } 
    }
    return (this.value===false) ?  res.reverse().join('') :  res.join('');
  } 
  }


module.exports = VigenereCipheringMachine;



