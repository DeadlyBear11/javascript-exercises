const ftoc = function(ftemp) {
  let newTemp = (ftemp - 32) * (5/9);
  newTemp = Math.round(newTemp * 10) /10;
  return newTemp;
};

const ctof = function(ctemp) {
  let newTemp = ctemp * (9/5) + 32;
  newTemp = Math.round(newTemp * 10) /10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
