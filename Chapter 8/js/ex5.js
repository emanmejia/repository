// Searching inside a string

// Looking for particular values inside a string is a common task.

// The indexOf() method takes as a parameter the searched-for value.  If that value is found inside the string, it returns the index of the first occurence of the value.  Otherwise it returns -1.

const song = "Old Town Road";
console.log(song.indexOf("Town")); // 4
console.log(song.indexOf("Old")); // 0 
console.log(song.indexOf("0ld")); // -1


// When searching for a value at the beginning or end of a string, you may also use the startsWith() and endsWith() methods.  Both return either true or false, depending on whether the value is found or not.  Beware: these methods are case-sensitive.

console.log(song.startsWith("Old")); // True
console.log(song.startsWith("0ld")); // False
console.log(song.startsWith("Town")); // False

console.log(song.endsWith("Town")); // False
console.log(song.endsWith("Road")); // True
console.log(song.endsWith("road")); // False