class Profile {
  constructor(name, email, rating, trips, memberSince, payMethods) {
    this.name = name;
    this.email = email;
    this.rating = rating;
    this.trips = trips;
    this.memberSince = memberSince;
    this.payMethods = payMethods;
  }
  getMainPayMethod() {
    return this.payMethods[0];
  }
}

const myProfile = new Profile(
  "Alejandro Gutiérrez",
  "tlozot@gmail.com",
  4.5,
  100,
  Date("01/02/2017"),
  ["PayPal", "Cash"]
);
console.log("Nombre del usuario: " + myProfile.name);
console.log("Miembro desde: " + myProfile.memberSince);
console.log("Método de pago principal: " + myProfile.getMainPayMethod());

class Travel {
  constructor(
    username,
    user_email,
    driver,
    driver_email,
    pickup,
    destination,
    eta,
    duration,
    paymentMethod
  ) {
    this.username = username;
    this.user_email = user_email;
    this.driver = driver;
    this.driver_email = driver_email;
    this.pickup = pickup;
    this.destination = destination;
    this.eta = eta;
    this.duration = duration;
    this.paymentMethod = paymentMethod;
  }
  getPayMethod() {
    return this.paymentMethod;
  }
  getTripInfo() {
    return `Trip from: ${this.pickup} to ${this.destination}, ETA: ${this.eta} minutes.`;
  }
}

const myTrip = new Travel ("Alejandro Gutiérrez", "tlozot@gmail.com", "Juan López", "jlopez_19@gmail.com", "Pickup spot - LAX Airport", "Hotel Inn LA Riverside", 24, 25, "Cash")
console.log("Nombre del usuario:" + myTrip.username);
console.log("Miembro del conductor: " + myTrip.drivername);
console.log(myTrip.getTripInfo());
