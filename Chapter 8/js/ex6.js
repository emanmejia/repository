// Breaking a string into parts

// Sometimes a string is made of several parts separated by a particular value.  In that case, it's easy to obtain the individual parts by using the split() method.  This method takes as a parameter the separator and returns an array containing the parts.

const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(",");
console.log(months[0]); "Jan"
console.log(months[11]); "Dec"