import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { movies } from "./data.js";
import { halls } from "./data.js";
import { logins } from "./data.js";

import { mongoose } from "mongoose";
import { Hall } from "./models/hall.js";
import { Movie } from "./models/movie.js";

const db =
  "mongodb+srv://Olesya:test123@cluster0.ru1wimx.mongodb.net/node-blog?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db)
  .then((res) => console.log("Connect to DB"))
  .catch((error) => console.log(error));

let nextId = 1;

let ticket = {};

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    type(req) {
      return true;
    },
  })
);
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  // res.send(JSON.stringify(movies));
});

app.post("/movies", (req, res) => {
  
  let title = req.body.title;
  let synopsis = req.body.synopsis;
  let img = req.body.img;
  let duration = req.body.duration;
  let origin = req.body.origin;
  let date = req.body.date;
  let seances = req.body.seances;
  
  Movie.find()
    .then(() => {    
      
      const movie = new Movie({ title, synopsis, img, duration, origin, date, seances });
     
      movie.seances[0].time = [...movie.seances[0].time];
      movie
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
          console.log(error);
        });
    })
});

app.get("/halls", (req, res) => {
  Hall.find()
    .then((halls) => {
      res.status(200).json(halls);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  // res.send(JSON.stringify(halls));
});

app.post("/halls", (req, res) => {
  let id = nextId;
  let rows = 10;
  let seats = 8;
  let places = [
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],
    ["disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled", "disabled"],    
  ];
  let prices = { standart: 100, vip: 200 };

  Hall.find()
    .then((hallArr) => { 
      id = hallArr.length + 1;
      
      const hall = new Hall({ id, rows, seats, places, prices });  
      hall
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
          console.log(error);
        });
    })  
});

app.put("/logins", (req, res) => {
  const email = req.body.email;
  const password = Number(req.body.password);

  if (email === logins.email && password === logins.password) {
    res.send(true);
  } else {
    res.send(false);
  }

  res.status(204);
  res.end();
});

app.put("/halls/:id", (req, res) => {
  const hallId = Number(req.body.id + 1);
  
  Hall.findById(hallId)
    .then((hall) => {
      res.status(200).json(hall);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
  // const hallId = Number(req.body.id + 1);
  // halls.forEach((item) => {
  //   if (item.id === hallId) {
  //     item.prices.standart = Number(req.body.standart);
  //     item.prices.vip = Number(req.body.vip);
  //   }
  // });
  // console.log(halls);
  // res.status(204).end();
});

app.put("/places/:id", (req, res) => {
  const hallId = Number(req.body.id + 1);
  

  Hall.findOneAndUpdate({ id: hallId }, { $set: {rows: req.body.rows, seats: req.body.seats}})
    .then((hall) => {
      let difRow = req.body.rows - hall.places.length;
      
      let difSeat = req.body.seats - hall.places[0].length;
      

      

      if (difRow > 0) {
        for (let i = 0; i < difRow; i++) {
          hall.places.push([...hall.places[hall.places.length - 1]]);
        }
      } else if (difRow < 0) {
        hall.places.splice(req.body.rows);
      }

      if (difSeat > 0) {
        hall.places.forEach((place) => {
              for (let i = 0; i < difSeat; i++) {
                place.push("disabled");
              }
            });
      } else if (difSeat < 0) {
        hall.places.forEach((place) => {
          place.splice(req.body.seats);
        });
      }

      
      hall.save()
      .then(() => {           
        res.status(200).json(hall);
      })                
     
    })
    .catch(() => handleError(res, "Something goes wrong..."));

  // halls.forEach((item) => {
  //   if (item.id === hallId) {
  //     item.rows = Number(req.body.rows);
  //     item.seats = Number(req.body.seats);
  //   }
  // });

  // let el = halls[hallId - 1];

  // let difRow = el.rows - el.places.length;
  // let difSeat = el.seats - el.places[0].length;

  // if (difRow > 0) {
  //   for (let i = 0; i < difRow; i++) {
  //     el.places.push(el.places[el.places.length - 1]);
  //   }
  // } else if (difRow < 0) {
  //   el.places.splice(el.rows);
  // }

  // if (difSeat > 0) {
  //   el.places.forEach((e) => {
  //     for (let i = 0; i < difSeat; i++) {
  //       e.push("disabled");
  //     }
  //   });
  // } else if (difSeat < 0) {
  //   el.places.forEach((place) => {
  //     place.splice(el.seats);
  //   });
  // }

  // res.status(204).end();
});

app.delete("/halls/:id", (req, res) => {
  nextId--;
  const hallId = Number(req.params.id);
  
  Hall.deleteOne({ id: hallId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.post("/ticket", (req, res) => {
  ticket.title = req.body.title;
  ticket.seances = req.body.seances;
  ticket.hall = req.body.hall;
  
  res.status(204);
  res.end();
});

app.get("/ticket", (req, res) => {
  res.send(JSON.stringify(ticket));
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);

// const MongoDBclient = new MongoClient('mongodb://Timeweb:cloud@127.0.0.1:27017/?authMechanism=DEFAULT');

// const connect = async () =>{
//    try {
//        await MongoDBclient.connect();
//        console.log("Успешно подключились к базе данных");
//        await MongoDBclient.close();
//        console.log("Закрыли подключение");
//    } catch (e) {
//        console.log(e);
//    }
// }

// connect();
