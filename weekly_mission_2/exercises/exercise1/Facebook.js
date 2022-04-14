const user = {
  user: "Alejandro Gutiérrez",
  username: "tlozot",
  password: "Str84re4l",
  email: "tlozot@gmail.com",
  bio: "Not so much to say...",
  friends: 100,
  age: 30,
  location: "Mexico City",
  getFriends: function () {
    return this.friends;
  },
  getEmailLinked: function () {
    return `User ${this.username} has the following email account linked: ${this.email}`;
  },
};

console.log("Nombre:" + user.user);
console.log("Amigos: " + user.getFriends());
console.log(user.getEmailLinked());

const post = {
  author: "Alejandro Gutiérrez",
  content: "Not so much to say...",
  reactions: 100,
  shared_count: 30,
  getInteractions: function () {
    return this.reactions + this.shared_count;
  },
};

console.log("Contenido del post:" + post.content);
console.log("Interacciones totales: " + post.getInteractions());

const bio = {
  user: "tlozot",
  description: "Not so much to say...",
  timeline_posts: 100,
  views_count: 30,
  reactions: 245,
  comments: 556,
  shared: 25,
  getInteractions: function () {
    return this.reactions + this.comments + this.shared;
  },
};

console.log("Descripción:" + bio.description);
console.log("Interacciones totales: " + bio.getInteractions());
