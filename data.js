export const movies = [
  {
    id: 0,
    title: "Звёздные войны XXIII: Атака клонированных клонов",
    synopsis:
      "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "30.03",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 1,
    title: "Сумерки",
    synopsis: "Ты мой личный сорт героина",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "31.03",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 2,
    title: "Гарри Поттер",
    synopsis: "Всегда",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "1.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 3,
    title: "ЗВ",
    synopsis: "ЗВ",
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
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 4,
    title: "Тоторо",
    synopsis: "Тоторо",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "3.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 5,
    title: "Любовь и голуби",
    synopsis: "Вася",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "4.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 6,
    title: "Питер ФМ",
    synopsis: "...",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "5.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
      },
    ],
  },
  {
    id: 7,
    title: "Питер ФМ",
    synopsis: "...",
    img: "",
    duration: "130 минут",
    origin: "США",
    date: "5.04",
    seances: [
      {
        hall: 1,
        time: ["10:20", "14:10"],
      },
      {
        hall: 2,
        time: ["11:15", "14:40"],
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
