const user = {
  user: "Alejandro Gutiérrez",
  username: "tlozot",
  password: "Str84re4l",
  email: "tlozot@gmail.com",
  bio: "Not so much to say...",
  followers: 100,
  following: 1500,
  age: 30,
  location: "Mexico City",
  getFollowers: function () {
    return this.issues_open + this.issues_close;
  },
  getEmailLinked: function () {
    return `User ${this.username} has the following email account linked: ${this.email}`;
  },
};

console.log("Nombre:" + user.user);
console.log("Nombre de usuario: " + user.username);
console.log(user.getEmailLinked());

const trending_topic = {
  hashtag: "chisme",
  dateCreated: Date("04/10/2022"),
  hashtag_count: 50000,
  lastHashtagCreatedDate: Date("04/14/2022"),
  totalLikes: 1000000,
  totalComments: 50000,
  getInteractions: function () {
    return this.totalComments + this.totalLikes;
  },
  getInfo: function () {
    return `Trening topic #${this.hashtag} was created on: ${this.dateCreated}`;
  },
};

console.log("Interacciones totales: " + trending_topic.getInteractions());
console.log(trending_topic.getInfo());

const hashtag = {
    title: "noticiasdehoy",
    author: 'user_unknown',
    dateCreated: Date("04/10/2022"),
    hashtag_count: 50000,
    lastHashtagCreatedDate: Date("04/14/2022"),
    totalLikes: 1000000,
    totalComments: 50000,
    getInteractions: function () {
      return this.totalComments + this.totalLikes;
    },
    getInfo: function () {
      return `Hashtag #${this.title} was created on: ${this.dateCreated} by ${this.author}`;
    },
  };
  
  console.log("Interacciones totales: " + hashtag.getInteractions());
  console.log(hashtag.getInfo());