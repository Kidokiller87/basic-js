//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let result =[]
if (!members) {
  return false
}
  for (let i=0;i<members.length;i++ ) {
    if (typeof(members[i])==="string") {
      members[i] = members[i].replace(/\s/g,'');
    result.push(members[i][0].toUpperCase())
  } 
}  
return result.sort().join('');
}