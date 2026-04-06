const projects = [
  {
    imageURL: "images/card-image1.png",
    badge: "Web Design",
    title: "Optimizing Data Collection with Forms",
    description: "This redesign not only solved a critical usability problem but also demonstrated the value of a user-centered, data-driven approach, paving the way for a more intuitive and efficient platform.",
    link: "#"
  },
  {
    imageURL: "images/card-image2.png",
    badge: "Web Design",
    title: "Redefining the Announcements Experience",
    description: "This redesign of the Announcements module stands as a testament to the power of user-centered design combined with strategic business objectives.",
    link: "#"
  },
  {
    imageURL: "images/card-image3.png",
    badge: "Wireframing",
    title: "Core HR Platform Landing Page",
    description: "This project reinforced the importance of balancing aesthetic appeal with clear, concise communication, especially for a complex B2B product.",
    link: "#"
  },
  {
    imageURL: "images/card-image4.svg",
    badge: "Product Design ",
    title: "Revamping the Goals Module",
    description: "This project demonstrates my ability to not only enhance UI/UX but also build a complex, feature-rich front-end application from the ground up using Angular.",
    link: "#"
  }
];

const projectContainer = document.getElementById('project-list');

const projectCard = `<article class="project-card-glass">
                        <div class="card-image-container">
                            <img class="card-images" src="${project.imageURL}" alt="Description of Projects">
                            <span class="category-badge">${project.badge}</span>
                        </div>
                        <div class="card-content">
                            <h3>${project.title}</h3>
                            <p>${project.descriptions}</p>
                            <button type="button" class="view-project-btn">View Project</button>
                        </div>
                    </article>`;

projects.map((project) => {
    return projectCard;
}).join('');

projectContainer.innerHTML = projectCard;

