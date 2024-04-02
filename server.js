import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { movies } from './data.js';
import { halls } from './data.js';
import { logins } from './data.js';

let nextId = 2;

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
  res.send(JSON.stringify(movies));
});

app.get("/halls", (req, res) => {
  res.send(JSON.stringify(halls));
});


app.post("/halls", (req, res) => {
  nextId++;
  let newHall = {
    id: 0,
    rows: 10,
    seats: 8,
    places: [
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
    ],
    prices: { standart: 100, vip: 200 },
  };
  newHall.id = nextId;
  halls.push(newHall);
  res.status(204);
  res.end();
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
  halls.forEach((item) => {
    if (item.id === hallId) {
      item.prices.standart = Number(req.body.standart);
      item.prices.vip = Number(req.body.vip);
    }
  });
  console.log(halls);
  res.status(204).end();
});

app.put("/places/:id", (req, res) => {
  const hallId = Number(req.body.id + 1);
  halls.forEach((item) => {
    if (item.id === hallId) {
      item.rows = Number(req.body.rows);
      item.seats = Number(req.body.seats);
    }
  });

  let el = halls[hallId - 1];

  let difRow = el.rows - el.places.length;
  let difSeat = el.seats - el.places[0].length;

  if (difRow > 0) {
    for (let i = 0; i < difRow; i++) {
      el.places.push(el.places[el.places.length - 1]);
    }
  } else if (difRow < 0) {
    el.places.splice(el.rows);
  }

  if (difSeat > 0) {
    el.places.forEach((e) => {
      for (let i = 0; i < difSeat; i++) {
        e.push("disabled");
      }
    });
  } else if (difSeat < 0) {
    el.places.forEach((place) => {
      place.splice(el.seats);
    });
  }

  res.status(204).end();
});

app.delete("/halls/:id", (req, res) => {
  nextId--;
  const hallId = Number(req.params.id);
  const index = halls.findIndex((o) => o.id === hallId);
  if (index !== -1) {
    halls.splice(index, 1);
  }
  res.status(204);
  res.end();
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);

// console.log(posts);
