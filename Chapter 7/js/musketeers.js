/* 
Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.

*/

const musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

// Add D'Artagnan to the beginning of the array
musketeers.push("D'Artagnan");

// Using forEach to log each element
musketeers.forEach(musketeers => {
  console.log(musketeers);
})

// Remove "Aramis" from the array
musketeers.splice(2, 1);

// Using for-of loop to log each element
for (const musketeer of musketeers) {
  console.log(musketeer);
}
