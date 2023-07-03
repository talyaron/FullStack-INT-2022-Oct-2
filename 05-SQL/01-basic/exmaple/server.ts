import express from "express";
const app = express();
// const { Sequelize } = require('sequelize');
const mysql = require('mysql');
app.use(express.json());

//static file
app.use(express.static('./client'));


var connection = mysql.createConnection({
  host: 'localhost',
  port: "3306",
  user: 'root',
  password: '12345678',
  database: 'store_2'
});

connection.connect();
// const sequelize = new Sequelize('store_2', 'root', '12345678', {
//   host: 'localhost',
//   port:"3306",
//   dialect: 'mysql'
// });

// (async ()=>{
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

// })()






// 

//routes

//data routes
app.get("/get-products", (req, res) => {
 

  connection.query('select product_name from products', function (error: any, results: any[], fields: any) {
    try {
      if (error) throw error;
      console.log('The solution is: ', results);
      console.log("fields", fields)
      res.send({ products: results })

      // connection.end();

    } catch (error: any) {
      console.error(error)
      res.send({ error: error.message })
    }
  });

})

// INSERT INTO products (product_name, product_description) VALUES (value1, value2);
app.post("/add-product", (req, res) => {
  try {
    const { product_name, product_description } = req.body;
    if (!product_name || !product_description) throw new Error("product_name and product_description are required")

    // connection.connect();

    connection.query(`INSERT INTO products (product_name, product_description) VALUES ("${product_name}", "${product_description}")`, function (error: any, results: any[], fields: any) {
      try {
        if (error) throw error;
        console.log('The solution is: ', results);
        console.log("fields", fields)
        res.send({ products: results })

        // connection.end();

      } catch (error: any) {
        console.error(error)
        res.send({ error: error.message })
      }
    });
  } catch (error: any) {
    console.error(error)
    res.send({ error: error.message })
  }


})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
