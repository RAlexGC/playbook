class User {
  constructor(user, username, password, email, bio, friends, age, location) {
    this.user = user;
    this.username = username;
    this.password = password;
    this.email = email;
    this.bio = bio;
    this.friends = friends;
    this.age = age;
    this.location = location;
  }
  getFriends() {
    return this.friends;
  }
  getEmailLinked() {
    return `User ${this.username} has the following email account linked: ${this.email}`;
  }
}
const myUser = new User(
  "Alejandro Gutiérrez",
  "tlozot",
  "Str84re4l",
  "tlozot@gmail.com",
  "Not so much to say...",
  100,
  30,
  "Mexico City"
);
console.log("Nombre:" + myUser.user);
console.log("Amigos: " + myUser.getFriends());
console.log(myUser.getEmailLinked());

class Post {
  constructor(author, content, reactions, shared_count) {
    this.author = author;
    this.content = content;
    this.reactions = reactions;
    this.shared_count = shared_count;
  }
  getInteractions() {
    return this.reactions + this.shared_count;
  }
}

const myPost = new Post(
  "Alejandro Gutiérrez",
  "Not so much to say...",
  100,
  30
);
console.log("Contenido del post: " + myPost.content);
console.log("Interacciones totales: " + myPost.getInteractions());

class Bio {
  constructor(
    user,
    description,
    timeline_posts,
    views_count,
    reactions,
    comments,
    shared
  ) {
    this.user = user;
    this.description = description;
    this.timeline_posts = timeline_posts;
    this.views_count = views_count;
    this.reactions = reactions;
    this.comments = comments;
    this.shared = shared;
  }
  getInteractions() {
    return this.reactions + this.comments + this.shared;
  }
}

const myBio = new Bio ('tlozot', 'Not so much to say...', 100, 30, 245, 556, 25)
console.log("Descripción: " + myBio.description);
console.log("Interacciones totales: " + myBio.getInteractions());