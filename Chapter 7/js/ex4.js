// Another way is to call the forEach() method on the array.  It takes as a parameter a function that will be applied to each array element.

const movies = ["The Wolf of Wall Street", "The Princess Bride", "Rush Hour", "Home Alone", "Nope"];
movies.forEach(movie => {
  console.log(movie);
});

// Lastly, you can use the for-of loop, a special kind of loop dealing with iterable objects like arrays.

const movies2 = ["The Wolf of Wall Street", "The Princess Bride", "Rush Hour", "Home Alone", "Nope"];
for (const movie of movies2) {
  console.log(movie);
};
