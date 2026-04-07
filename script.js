let  projects = [];

const projectContainer = document.getElementById('project-list');
const searchInput = document.getElementById('search-project');

fetch('https://magnetikworks.github.io/project-data/data/projects.json')
    .then(response => response.json())
    .then(jsonData => {
        projects = jsonData; 
        showProjects(projects);
        console.table(projects); 
    })
    .catch(error => {
        console.error("Error fetching projects:", error);
        projectContainer.innerHTML = "<p>Failed to load projects.</p>";
    });


searchInput.addEventListener('input', (e) => {
    const inputString = e.target.value.toLowerCase();
    console.log(inputString);

    const filteredList = projects.filter(project => {
        return project.projectDate.toLowerCase().includes(inputString) || project.projectName.toLowerCase().includes(inputString) || project.projectDescription.toLowerCase().includes(searchInput)
    })
    console.log(filteredList);
    showProjects(filteredList);

    if(filteredList.length === 0){
        projectContainer.innerHTML = `<p> No projects match the term "${inputString}".`;
    }
});


function showProjects(filteredList){
    const updatedList = filteredList.map((project) => {
        return `<article class="project-card-glass">
                    <div class="card-image-container">
                        <img class="card-images" src="${project.imageURL}" alt="Description of Projects">
                        <span class="category-badge">${project.projectDate}</span>
                    </div>
                    <div class="card-content">
                        <h3>${project.projectName}</h3>
                        <p>${project.projectDescription}</p>
                        <button type="button" class="view-project-btn">View Project</button>
                    </div>
                </article>`;
    }).join('');
   
    projectContainer.innerHTML = updatedList;
}

showProjects(projects);


