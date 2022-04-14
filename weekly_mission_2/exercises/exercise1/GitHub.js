const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "Code problem",
  repositoryNameAssociated: "LaunchX",
  status: "Open",
  numberOfComments: 10,
  labels: 25,
  author: 'ralexgc',
  dateCreated: Date("04-14-2022"),
  lastUpdated: Date("04-14-2022"),
  getTitleAndAuthor: function () {
    return `Issue title: ${this.title}, author: ${this.author}`;
  },
  getGeneralInfo: function () {
    return `This issue: ${this.title}, in repository: ${this.repositoryNameAssociated} was created by ${this.author} on ${this.dateCreated}`;
  },
};

console.log("Título del issue:" + issue.title);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const pullrequest = {
  title: "Code improvement",
  branchName: "Login",
  dateCreated: Date("04-14-2022"),
  status: "Open",
  repositoryNameAssociated: "LaunchX",
  author: 'ralexgc',
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return `PullRequest title: ${this.title}, author: ${this.author}`;
  },
};

console.log("Título del PR: " + pullrequest.title);
console.log('Estado del PR: '+pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuthor());