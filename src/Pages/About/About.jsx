import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <header className="headerAbout">
        <h1>Rick And Morty by Máximo Nicolás Castro Rodriguez</h1>
      </header>

      <section className="about-content">
        <p>
          Hello! I´m Nicolás Castro, a passionate web developer with a solid
          two-year background in Software Engineering. Today, I am excited to
          introduce you to my latest project, a unique experience inspired by
          the fascinating universe of Rick & Morty.
          <h4>The World of Rick & Morty</h4>
          Rick & Morty is a series that has captivated audiences worldwide with
          its blend of science fiction, irreverent humor, and interdimensional
          adventures. Inspired by this world, I decided to push my programming
          passion to new limits.
          <h4>Technologies Used</h4>
          <h4>JavaScript:</h4> The primary language that has powered the logic
          of my project, enabling smooth interactivity and an exceptional user
          experience.
          <h4>React:</h4>I utilized this powerful library to build a dynamic and
          intuitive user interface, allowing users to immerse themselves
          seamlessly in the project.
          <h4>Express:</h4>
          The robust Express server application facilitated request handling and
          the construction of an efficient backend architecture.
        </p>
      </section>

      <footer>
        <div className="contact-info">
          <p>Contact:</p>
          <p>Email: maximonicolascastro@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/m%C3%A1ximo-nicolas-castro-rodr%C3%ADguez-715a18217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p>Phone: +34 682044125</p>
        </div>
      </footer>
    </div>
  );
};
