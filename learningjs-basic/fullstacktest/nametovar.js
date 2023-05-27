const carList = [];

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function addCarToList(...car) {
  car.forEach(function (car) {
    carList.push(car);
  });
}

function getInput() {
  brandInput = document.getElementById("carBrand").value;
  modelInput = document.getElementById("carModel").value;
  yearInput = document.getElementById("carYear").value;

  const car = new Car(brandInput, modelInput, yearInput);
  addCarToList(car);
  saveNotification();
}

function saveNotification() {
  const box = document.getElementById("maindiv");

  const notif = document.createElement("div");
  notif.setAttribute("id", "notifbox");
  notif.classList.add("notif");

  const currentCarIndex = carList.length - 1;
  notif.textContent = `Saved: ${carList[currentCarIndex].make} ${carList[currentCarIndex].model} ${carList[currentCarIndex].year}`;

  box.appendChild(notif);
}

document.getElementById("save").addEventListener("click", getInput);
