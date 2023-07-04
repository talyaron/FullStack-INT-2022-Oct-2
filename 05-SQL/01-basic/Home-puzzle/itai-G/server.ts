import express from "express";
const app = express();
const mysql = require("mysql");

app.use(express.json());
app.use(express.static("./client"));

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "12345",
  database: "songs",
});

connection.connect(function (error: any) {
  if (error) {
    console.log("MySQL connection error");
  } else {
    console.log("MySQL connection succeeded");
  }
});

app.get("/get-lyrics", (req:any, res:any) => {
  connection.query(
    "SELECT * FROM lyrics;",
    function (error: any, results: any[], fields: any) {
      try {
        if (error) throw error;
        console.log("The solution is: ", results);
        console.log("fields", fields);
        res.send({ lyrics: results });
      } catch (error: any) {
        console.error(error);
        res.send({ error: error.message });
      }
    }
  );
});

app.post("/add-lyrics", (req, res) => {
  try {
    const { lyrics_title, lyrics_words, lyrics_author } = req.body;
    if (!lyrics_title || !lyrics_words || !lyrics_author)
      throw new Error("lyrics_title and lyrics_words and lyrics_author are required");

    // connection.connect();

    connection.query(
      `INSERT INTO lyrics (lyrics_title, lyrics_words, lyrics_author) VALUES ("${lyrics_title}", "${lyrics_words}", "${lyrics_author}")`,
      function (error: any, results: any[], fields: any) {
        try {
          if (error) throw error;
          console.log("The solution is: ", results);
          console.log("fields", fields);
          res.send({ lyricss: results });

          // connection.end();
        } catch (error: any) {
          console.error(error);
          res.send({ error: error.message });
        }
      }
    );
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
});
app.delete("/delete-lyrics-by-id", (req, res) => {
  try {
    const { lyrics_id } = req.body;
    if (!lyrics_id) throw new Error("lyrics_id is required");

    // connection.connect();

    connection.query(
      `DELETE FROM lyrics WHERE lyrics_id="${lyrics_id}"`,
      function (error: any, results: any[], fields: any) {
        try {
          if (error) throw error;
          console.log("The solution is: ", results);
          console.log("fields", fields);
          res.send({ lyricss: results });

          // connection.end();
        } catch (error: any) {
          console.error(error);
          res.send({ error: error.message });
        }
      }
    );
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.patch("/update-lyrics", (req, res) => {
  try {
    const { lyrics_title, lyrics_words, lyrics_id , lyrics_author} = req.body;
    if (!lyrics_title || !lyrics_words || !lyrics_id || !lyrics_author)
      throw new Error("lyrics_title and lyrics_words and lyrics_id are required");

    // connection.connect();

    connection.query(
      `UPDATE lyrics
      SET lyrics_title = "${lyrics_title}", lyrics_words = "${lyrics_words}",lyrics_author = "${lyrics_author}"
      WHERE lyrics_id = ${lyrics_id};`,
      function (error: any, results: any[], fields: any) {
        try {
          if (error) throw error;
          console.log("The solution is: ", results);
          console.log("fields", fields);
          res.send({ lyricss: results });

          // connection.end();
        } catch (error: any) {
          console.error(error);
          res.send({ error: error.message });
        }
      }
    );
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
