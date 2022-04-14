const profile = {
  name: "Alejandro Gutiérrez",
  email: "tlozot@gmail.com",
  rating: 4.5,
  trips: 100,
  memberSince: Date("01/02/2017"),
  payMethods: ["PayPal", "Cash"],
  getMainPayMethod: function () {
    return this.payMethods[0];
  },
};

console.log("Nombre del usuario:" + profile.name);
console.log("Miembro desde: " + profile.memberSince);
console.log("Método de pago principal: " + profile.getMainPayMethod());

const travel = {
  username: "Alejandro Gutiérrez",
  user_email: "tlozot@gmail.com",
  drivername: "Juan López",
  driver_email: "jlopez_19@gmail.com",
  pickup: "Pickup spot - LAX Airport",
  destination: "Hotel Inn LA Riverside",
  eta: 24,
  duration: 25,
  paymentMethod: "Cash",
  getPayMethod: function () {
    return this.paymentMethod;
  },
  getTripInfo: function () {
    return `Trip from: ${this.pickup} to ${this.destination}, ETA: ${this.eta} minutes.`;
  },
};

console.log("Nombre del usuario:" + travel.username);
console.log("Miembro del conductor: " + travel.drivername);
console.log(travel.getTripInfo());
