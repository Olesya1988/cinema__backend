export const movies = [
  {
    id: 0,
    title: "Побег из Шоушенка",
    synopsis:
      "Страх - это кандалы. Надежда - это свобода",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "2.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["14:15", "16:40"],
      },
    ],
  },
  {
    id: 1,
    title: "Зеленая миля",
    synopsis: "Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "3.04",
    seances: [
      {
        hall: 1,
        time: ["17:20", "20:10"],
      },
      {
        hall: 2,
        time: ["16:15", "23:40"],
      },
    ],
  },
  {
    id: 2,
    title: "Форрест Гамп",
    synopsis: "Мир уже никогда не будет прежним, после того как вы увидите его глазами Форреста Гампа",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "4.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "18:10"],
      },
      {
        hall: 2,
        time: ["12:15", "21:40"],
      },
    ],
  },
  {
    id: 3,
    title: "Список Шиндлера",
    synopsis: "Этот список - жизнь",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "5.04",
    seances: [
      {
        hall: 1,
        time: ["20:20", "22:10"],
      },
      {
        hall: 2,
        time: ["21:15", "22:40"],
      },
    ],
  },
  {
    id: 4,
    title: "1+1",
    synopsis: "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "6.04",
    seances: [
      {
        hall: 1,
        time: ["09:20", "12:10"],
      },
      {
        hall: 2,
        time: ["11:30", "17:40"],
      },
    ],
  },
  {
    id: 5,
    title: "Иван Васильевич меняет профессию",
    synopsis: "Иван Грозный отвечает на телефон, пока его тезка-пенсионер сидит на троне. Советский хит о липовом государе",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "7.04",
    seances: [
      {
        hall: 1,
        time: ["17:20", "19:30"],
      },
      {
        hall: 2,
        time: ["15:20", "17:20"],
      },
    ],
  },
  {
    id: 6,
    title: "Король Лев",
    synopsis: "The Circle of Life",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "8.04",
    seances: [
      {
        hall: 1,
        time: ["17:20", "18:50"],
      },
      {
        hall: 2,
        time: ["11:15", "18:40"],
      },
    ],
  },
  {
    id: 7,
    title: "Тайна Коко",
    synopsis: "The celebration of a lifetime",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "8.04",
    seances: [
      {
        hall: 1,
        time: ["17:20", "19:10"],
      },
      {
        hall: 2,
        time: ["12:15", "15:40"],
      },
    ],
  },
];

export const halls = [
  {
    id: 1,
    rows: 10,
    seats: 8,
    places: [
        ["disabled", "disabled", "disabled", "standart", "standart", "disabled", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "vip", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "vip", "vip", "vip", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "vip", "vip", "vip", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "vip", "vip", "vip", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],      
      ],
    prices: { standart: 200, vip: 350 },
  },
  {
    id: 2,
    rows: 12,
    seats: 8,
    places: [
        ["disabled", "disabled", "disabled", "standart", "standart", "disabled", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "vip", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "vip", "vip", "vip", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "vip", "vip", "vip", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "vip", "vip", "vip", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"], 
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],
        ["disabled", "disabled", "standart", "standart", "standart", "standart", "disabled", "disabled"],     
      ],
    prices: { standart: 200, vip: 350 },
  },
];

export const logins = { email: "123@test.ru", password: 123 };
