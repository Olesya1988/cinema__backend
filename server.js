import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoose } from "mongoose";
import { Hall } from "./models/hall.js";
import { Movie } from "./models/movie.js";
import { Login } from "./models/login.js";
import { Ticket } from "./models/ticket.js";

const db =
  "mongodb+srv://Olesya:test123@cluster0.ru1wimx.mongodb.net/node-blog?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db)
  .then((res) => console.log("Connect to DB"))
  .catch((error) => console.log(error));

let nextId = 1;

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
});

app.post("/movies", (req, res) => {
  let id = req.body.id;
  let title = req.body.title;
  let synopsis = req.body.synopsis;
  let img = req.body.img;
  let duration = req.body.duration;
  let origin = req.body.origin;
  let date = req.body.date;
  let seances = req.body.seances;

  Movie.find().then(() => {
    const movie = new Movie({
      id,
      title,
      synopsis,
      img,
      duration,
      origin,
      date,
      seances,
    });

    movie.seances[0].time = [movie.seances[0].time];

    movie
      .save()
      .then((result) => res.send(result))
      .catch((error) => {
        console.log(error);
      });
  });
});

app.delete("/movies/:id", (req, res) => {
  const movieId = req.params.id;

  Movie.deleteOne({ id: movieId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.get("/halls", (req, res) => {
  Hall.find()
    .then((halls) => {
      res.status(200).json(halls);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.post("/halls", (req, res) => {
  let id = nextId;
  let rows = 10;
  let seats = 8;
  let places = [
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],
    ["standart", "standart", "standart", "standart", "standart", "standart", "standart", "standart"],      
  ]; 
  let prices = { standart: 100, vip: 200 };

  Hall.find().then((hallArr) => {
    id = hallArr.length + 1;

    const hall = new Hall({ id, rows, seats, places, prices });
   
    hall
      .save()
      .then((result) => res.send(result))
      .catch((error) => {
        console.log(error);
      });
  });
});

app.put("/logins", (req, res) => {
  const email = req.body.email;
  const password = Number(req.body.password);

  Login.find()
    .then((login) => {
      if (email === login[0].email && password === Number(login[0].password)) {
        res.send(true);
      } else {
        res.send(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.put("/halls/:id", (req, res) => {
  const hallId = Number(req.body.id + 1);

  Hall.findById(hallId)
    .then((hall) => {
      res.status(200).json(hall);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.put("/prices/:id", (req, res) => {
  const hallId = Number(req.body.id + 1);

  Hall.findOneAndUpdate(
    { id: hallId },
    { $set: { prices: { standart: req.body.standart, vip: req.body.vip } } }
  )
    .then(() => {
      res.status(200).json();
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.put("/places/:id", (req, res) => {
  const hallId = Number(req.body.id + 1);  

  Hall.findOneAndUpdate(
    { id: hallId },
    { $set: { rows: req.body.rows, seats: req.body.seats, places: req.body.updatedPlaces } }
  )
  .then(() => {
    res.status(200).json();
  })
    // .then((hall) => {
    //   let difRow = req.body.rows - hall.places.length;

    //   let difSeat = req.body.seats - hall.places[0].length;

    //   if (difRow > 0) {
    //     for (let i = 0; i < difRow; i++) {
    //       hall.places.push([...hall.places[hall.places.length - 1]]);
    //     }
    //   } else if (difRow < 0) {
    //     hall.places.splice(req.body.rows);
    //   }

    //   if (difSeat > 0) {
    //     hall.places.forEach((place) => {
    //       for (let i = 0; i < difSeat; i++) {
    //         place.push(..."standart");
    //       }
    //     });
    //   } else if (difSeat < 0) {
    //     hall.places.forEach((place) => {
    //       place.splice(req.body.seats);
    //     });
    //   }

    //   hall.save().then(() => {
    //     console.log(hall);
    //     res.status(200).json(hall);
    //   });
    // })
    .catch(() => handleError(res, "Something goes wrong..."));
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
  let id = req.body.id;
  let title = req.body.title;
  let date = req.body.date;
  let time = req.body.time;
  let hall = req.body.hall;
  let places = req.body.places;

  Ticket.find().then(() => {
    const ticket = new Ticket({ id, title, date, time, hall, places }); 

    ticket
      .save()
      .then((result) => res.send(result))
      .catch((error) => {
        console.log(error);
      });
  });
});

app.get("/ticket", (req, res) => {
  Ticket.find()
    .then((tickets) => {
      res.status(200).json(tickets);
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

app.put("/ticket/:id", (req, res) => {
  const ticketId = req.body.id;

  Ticket.findOneAndUpdate(
    { id: ticketId },
    { $set: { places: req.body.places } }
  )
    .then(() => {
      res.status(200).json();
    })
    .catch(() => handleError(res, "Something goes wrong..."));
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);
