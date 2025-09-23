import { useNavigate } from "react-router-dom";
import ProjectTechCarousel from "../components/ProjectTechCarousel"; // adjust path if needed
import "../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>Feral Works</h1>
        <p>Developer • Projects • Downloads</p>
      </header>

      {/* Add the carousel here */}
      <ProjectTechCarousel />

      <main>

        <section
          className="project"
          onClick={() => navigate("/projects/project-one")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/projects/project-one");
            }
          }}
        >
          <h2>Project One</h2>
          <p>Short description of the first project.</p>
        </section>
        
                <section
          className="project"
          onClick={() => navigate("/projects/project-two")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/projects/project-two");
            }
          }}
        >
          <h2>Project Two</h2>
          <p>Short description of the second project.</p>
        </section>

        <section
          className="project"
          onClick={() => navigate("/projects/feral-engine")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/projects/feral-engine");
            }
          }}
        >
          <h2>Feral Engine</h2>
          <p>Lightweight, modular engine by Feral Works.</p>
        </section>

      </main>

      <footer>
        <div className="socials">
          <a href="https://github.com/BP-Feral" target="_blank">
            GitHub
          </a>{" "}
          •{" "}
          <a href="https://discord.gg/xcEYBpn2k2" target="_blank">
            Discord
          </a>
        </div>
        <p>&copy; 2025 Feral</p>
      </footer>
    </div>
  );
}

export default HomePage;
