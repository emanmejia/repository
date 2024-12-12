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

const getTotalRecords = () => {
    const sql = "SELECT COUNT(*) FROM product";
    return pool.query(sql)
        .then(result => {
            return {
                msg: "success",
                totRecords: result.rows[0].count
            }
        })
        .catch(err => {
            return {
                msg: `Error: ${err.message}`
            }
        });
};

///////////////////////////////////////////////
// INSERT
const insertProduct = (product) => {
  // Will accept either a product array or product object
  if (product instanceof Array) {
      params = product;
  } else {
      params = Object.values(product);
  };

  const sql = `INSERT INTO product (prod_id, prod_name, prod_desc, prod_price)
               VALUES ($1, $2, $3, $4)`;

  return pool.query(sql, params)
      .then(res => {
          return {
              trans: "success", 
              msg: `Product id ${params[0]} successfully inserted`
          };
      })
      .catch(err => {
          return {
              trans: "fail", 
              msg: `Error on insert of product id ${params[0]}.  ${err.message}`
          };
      });
};

//////////////////////////////////////////////////////////
// FIND PRODUCTS
const findProducts = (product) => {
  // Will build the query based on data provided in the form
  //  Use parameters to avoid sql injection

  // Declare variables
  let i = 1;
  const params = [];
  let sql = "SELECT * FROM product WHERE true";

  // Check data provided and build the query as necessary
  if (product.prod_id !== "") {
      params.push(parseInt(product.prod_id));
      sql += ` AND prod_id = $${i}`;
      i++;
  };
  if (product.prod_name !== "") {
      params.push(`${product.prod_name}%`);
      sql += ` AND UPPER(prod_name) LIKE UPPER($${i})`;
      i++;
  };
  if (product.prod_desc !== "") {
      params.push(`${product.prod_desc}%`);
      sql += ` AND UPPER(prod_desc) LIKE UPPER($${i})`;
      i++;
  };
  if (product.prod_price !== "") {
      params.push(parseFloat(product.prod_price));
      sql += ` AND prod_price >= $${i}`;
      i++;
  };

  sql += ` ORDER BY prod_id`;
  // for debugging
   console.log("sql: " + sql);
   console.log("params: " + params);

  return pool.query(sql, params)
      .then(result => {
          return { 
              trans: "success",
              rows: result.rows
          }
      })
      .catch(err => {
          return {
              trans: "Error",
              error: `Error: ${err.message}`
          }
      });
};


// EXPORT FUNCTIONS
module.exports.getTotalRecords = getTotalRecords;
module.exports.insertProduct = insertProduct;
module.exports.findProducts = findProducts;


