class User {
  constructor(
    user,
    username,
    password,
    email,
    bio,
    followers,
    following,
    age,
    location
  ) {
    this.user = user;
    this.username = username;
    this.password = password;
    this.email = email;
    this.bio = bio;
    this.followers = followers;
    this.following = following;
    this.age = age;
    this.location = location;
  }
  getFollowers() {
    return this.issues_open + this.issues_close;
  }
  getEmailLinked() {
    return `User ${this.username} has the following email account linked: ${this.email}`;
  }
}

const myUser = new User(
  "Alejandro Gutiérez",
  "tlozot",
  "Str84re4l",
  "tlozot@gmail.com",
  "Not so much to say...",
  100,
  1500,
  30,
  "Mexico City"
);
console.log("Nombre:" + myUser.user);
console.log("Nombre de usuario: " + myUser.username);
console.log(myUser.getEmailLinked());

class TT {
  constructor(
    hashtag,
    dateCreated,
    hashtag_count,
    lastHashtagCreatedDate,
    totalLikes,
    totalComments
  ) {
    this.hashtag = hashtag;
    this.dateCreated = dateCreated;
    this.hashtag_count = hashtag_count;
    this.lastHashtagCreatedDate = lastHashtagCreatedDate;
    this.totalLikes = totalLikes;
    this.totalComments = totalComments;
  }
  getInteractions() {
    return this.totalComments + this.totalLikes;
  }
  getInfo() {
    return `Trening topic #${this.hashtag} was created on: ${this.dateCreated}`;
  }
}

const ttop = new TT(
  "chisme",
  Date("04/10/2022"),
  50000,
  Date("04/10/2022"),
  1000000,
  50000
);
console.log("Interacciones totales: " + ttop.getInteractions());
console.log(ttop.getInfo());

class Hashtag {
  constructor(
    title,
    author,
    dateCreated,
    hashtag_count,
    lastHashtagCreatedDate,
    totalLikes,
    totalComments
  ) {
    this.title = title;
    this.author = author;
    this.dateCreated = dateCreated;
    this.hashtag_count = hashtag_count;
    this.lastHashtagCreatedDate = lastHashtagCreatedDate;
    this.totalLikes = totalLikes;
    this.totalComments = totalComments;
  }
  getInteractions() {
    return this.totalComments + this.totalLikes;
  }
  getInfo() {
    return `Hashtag #${this.title} was created on: ${this.dateCreated} by ${this.author}`;
  }
}

const ht = new Hashtag ('noticiasdehoy', 'user_unknown', Date("04/10/2022"), 5000, Date("04/10/2022"), 1000000, 50000);
console.log("Interacciones totales: " + ht.getInteractions());
console.log(ht.getInfo());