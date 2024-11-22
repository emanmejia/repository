// Adding an element to an array

// Don't lie to me: you've just watched Ghostbusters yet another time.  Let's add it to the list.  Here's how you'd do so.

const movies = ["The Wolf of Wall Street", "The Princess Bride", "Rush Hour", "Home Alone", "Nope"];
movies.push("Ghostbusters");
console.log(movies[5]); // Ghostbusters



// You add a new item to an array with the push() method.  The new element to be added is passed as a parameter to the method.  It is inserted at the end of an array.

// To add an element at the beginning of an array, us the unshift() method instead of push().

const movies2 = ["The Wolf of Wall Street", "Zootopia", "The Princess Bride"];
movies2.unshift("Harold and Kumar Go to White Castle");
console.log(movies2[0]); // Harold and Kumar Go to White Caslte

movies.forEach(movies => {
  console.log(movies);
})