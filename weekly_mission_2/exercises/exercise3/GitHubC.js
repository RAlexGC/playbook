class Repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }
  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }
  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

const repoone = new Repo(
  "LaunchX",
  "Alejandro Gutiérrez",
  ["JS", "Python"],
  50,
  12,
  20,
  180,
  120
);
console.log(repoone);
console.log(repoone.getTotalIssues());

class Issue {
  constructor(
    title,
    repositoryNameAssociated,
    author,
    status,
    numberOfComments,
    labels,
    dateCreated,
    lastUpdated
  ) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.author = author;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }
  getTitleAndAuthor() {
    return `Issue title: ${this.title}, author: ${this.author}`;
  }
  getGeneralInfo() {
    return `This issue: ${this.title}, in repository: ${this.repositoryNameAssociated} was created by ${this.author} on ${this.dateCreated}`;
  }
}

const issueone = new Issue(
  "Bug detected",
  "LaunchX",
  "RAlexGC",
  "Open",
  50,
  ["Bug", "Console"],
  Date("04/14/2022"),
  Date("04/14/2022")
);
console.log(issueone);
console.log(issueone.getGeneralInfo());

class PullRequest {
  constructor(
    title,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated,
    author
  ) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.author = author;
  }
  getStatus() {
    return this.status;
  }
  getTitleAndAuthor() {
    return `PullRequest title: ${this.title}, author: ${this.author}`;
  }
}

const pr = new PullRequest('Code improvement', 'Login', Date('04-14-2022'), 'Open', 'LaunchX', 'ralexgc')
console.log('Estado del PR: '+ pr.getStatus());
console.log(pr.getTitleAndAuthor());