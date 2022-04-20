const myProjects = ["Project 1", "Project 2"];
listItem(myProjects);

function listItem(myProjects) {
  let project = document.createElement("li");
  project.innerHTML = myProjects;
  document.getElementById("projectList").appendChild(project);
}
