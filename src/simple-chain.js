const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array:[],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
   this.array.push(`( ${String(value)} )`);
   return this
  },
  removeLink(position) {
    if (isNaN(position) || typeof this.array[position-1] === "undefined") {
this.array = [];
throw new Error();
    }
    this.array.splice(position-1, 1);
    return this;
  },
  reverseChain() {
  this.array = this.array.reverse();
  return this
  },
  finishChain() {
let result = this.array.join('~~');
this.array = [];
return result
  },
};

module.exports = chainMaker;
