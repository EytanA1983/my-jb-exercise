const cars = [
  {
    model: "Toyota Corolla",
    year: 2018,
    color: "white"
  },
  {
    model: "Mazda 3",
    year: 2020,
    color: "red"
  },
  {
    model: "Hyundai Tucson",
    year: 2022,
    color: "black"
  }
];

for (const car of cars) {
  for (const key in car) {
    console.log(key + ": " + car[key]);
  }
  console.log("זאת מכונית");
}
