// Add packages
require("dotenv").config();
// Add database package and connection string
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
      rejectUnauthorized: false
  },
  max: 2
});


// const sql = "SELECT * FROM product";
// pool.query(sql, [], (err, res) => {
//     console.log(err, res)
// });

// const getAll = () => {
//   const sql = "SELECT * FROM product";
//   pool.query(sql, [], (err, res) => {
//       if (err) {
//           return err.message;
//       }
//       return res.rows;
//   });
//   };
  
//   const result = getAll();
//   console.log(result);

// const getAll = () => {
//   const sql = "SELECT * FROM product";
//   // For illustration, not using try catch
//   return pool.query(sql, []);
// };

// const result = getAll();
// console.log(result);


// const getAll = () => {
//   console.log("--- STEP 2: Inside getAll() ---");
//   const sql = "SELECT * FROM product";
//   pool.query(sql, [], (err, res) => {
//       if (err) {
//           console.log("--- STEP 3: Error ---");
//           return err.message;
//       }
//       console.log("--- STEP 3: No Error ---");
//       return res.rows;
//   });
// };

// console.log("--- STEP 1: Before call to getAll() ---");
// const result = getAll();
// console.log("--- STEP 4: After call to getAll() ---");
// console.log(result);



// const getAll = () => {
//   const sql = "SELECT * FROM product";
//   pool.query(sql, [], (err, res) => {
//       if (err) {
//           console.log(err.message);
//       }
//       console.log(res.rows);
//   });
// };

// getAll();    


// const getAll = () => {
//   const sql = "SELECT * FROM product";
//   pool.query(sql, [])
//       .then(res => {console.log(res.rows)})
//       .catch(err => {console.log(err.message)});
// };

// getAll();


// const getAll =  () => {
//   console.log("--- STEP 2: Inside getAll() ---");
//   const sql = "SELECT * FROM product";
//   // For illustration, not using try catch
//   return pool.query(sql, []); 
// };


// console.log("--- STEP 1: Before call to getAll() ---");
// getAll()
//   .then(result => {
//       console.log("--- STEP 3: No Error ---");
//       console.log(result);
//   })
//   .catch(err => {
//       console.log("--- STEP 3: Error ---");
//       console.log(err.message);
//   });
// console.log("--- STEP 4: After call to getAll() ---");



// const getAll =  () => {
//   console.log("--- STEP 2: Inside getAll() ---");
//   const sql = "SELECT * FROM product";
//   // For illustration, not using try catch
//   return pool.query(sql, []); 
// };

// const dbTest = async () => {
//   console.log("--- STEP 1: Before call to getAll() ---");
//   const result = await getAll();
//   console.log("--- STEP 3: After call to getAll() ---");
//   console.log(result);
// };

// dbTest();

const getAll = () => {
  console.log("--- STEP 2: Inside getAll() ---");
  const sql = "SELECT * FROM product";
  try {
      console.log("--- STEP 3: Try Block ---");  
      return pool.query(sql, []);
  } catch (err) {
      console.log("--- STEP 3: Error Block ---");
      return err.message;
  };
};

(async () => {
  console.log("--- STEP 1: Before call to getAll() ---");
  const result = await getAll();
  console.log("--- STEP 4: After call to getAll() ---");
  console.log(result);
}
)();