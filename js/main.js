const myProjects = ["Project 1", "Project 2"];
myProjects.forEach(listItem);

function listItem(listOfProjects) {
  let project = document.createElement("li");
  project.innerHTML = listOfProjects;
  document.getElementById("projectList").appendChild(project);
}
