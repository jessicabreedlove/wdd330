const myProjects = [
  { label: "Project 1 - Story Editor ", url: "week1/story_editor.html" },
  { label: "Project 2 ", url: "week1/story_editor.html" },
];
myProjects.forEach(listItem);

function listItem(listOfProjects) {
  const projects = document.getElementById("projectList");
  let project = document.createElement("li");
  let projectA = document.createElement("a");
  projectA.innerHTML = listOfProjects.url;
  projectA.setAttribute("href", listOfProjects.url);
  project.innerHTML = listOfProjects.label;
  project.appendChild(projectA);
  projects.appendChild(project);
}
