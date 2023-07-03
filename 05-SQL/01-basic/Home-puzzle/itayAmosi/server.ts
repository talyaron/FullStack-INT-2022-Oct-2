import express from "express";

const app = express();
const mysql = require("mysql");
app.use(express.json());
app.use(express.static("./client"));

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root123",
  database: "lyrics",
});

connection.connect(function (error: any) {
  if (error) {
    console.log("MySQL connection error");
  } else {
    console.log("MySQL connection succeeded");
  }
});

app.get("/get-song", (req, res) => {
  connection.query(
    "SELECT * FROM song;",
    function (error: any, results: any[], fields: any) {
      try {
        if (error) throw error;
        console.log("The solution is: ", results);
        console.log("fields", fields);
        res.send({ songs: results });
      } catch (error: any) {
        console.error(error);
        res.send({ error: error.message });
      }
    }
  );
});

app.post("/add-song", (req, res) => {
  try {
    const { song_title, song_words, song_author } = req.body;
    if (!song_title || !song_words || !song_author)
      throw new Error("song_title and song_words and song_author are required");

    // connection.connect();

    connection.query(
      `INSERT INTO song (song_title, song_words, song_author) VALUES ("${song_title}", "${song_words}", "${song_author}")`,
      function (error: any, results: any[], fields: any) {
        try {
          if (error) throw error;
          console.log("The solution is: ", results);
          console.log("fields", fields);
          res.send({ songs: results });

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
app.delete("/delete-song-by-id", (req, res) => {
  try {
    const { song_id } = req.body;
    if (!song_id) throw new Error("song_id is required");

    // connection.connect();

    connection.query(
      `DELETE FROM song WHERE song_id="${song_id}"`,
      function (error: any, results: any[], fields: any) {
        try {
          if (error) throw error;
          console.log("The solution is: ", results);
          console.log("fields", fields);
          res.send({ songs: results });

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

app.patch("/update-song", (req, res) => {
  try {
    const { song_title, song_words, song_id } = req.body;
    if (!song_title || !song_words || !song_id)
      throw new Error("song_title and song_words and song_id are required");

    // connection.connect();

    connection.query(
      `UPDATE song
    SET song_title = "${song_title}", song_words = "${song_words}"
    WHERE song_id = ${song_id};`,
      function (error: any, results: any[], fields: any) {
        try {
          if (error) throw error;
          console.log("The solution is: ", results);
          console.log("fields", fields);
          res.send({ songs: results });

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

app.listen(4000, () => {
  console.log("server listen on port 4000");
});
