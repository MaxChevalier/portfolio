import Timeline from "../../components/Timeline/Timeline";
import milestone from "../../assets/data/milestone.json";
import Skills from "../../components/skill/skill";
import type { Milestone } from "../../types/milestone";
import "./home.scss";

const Home = () => {
  const milestones = milestone as Milestone[];

  return (
    <section className="main-section">
      <div className="f-row">
        <div className="f-col block-title">
          <h1 className="title">Bienvenue</h1>
          <h2 className="sub-title">Je suis Maxime CHEVALIER</h2>
        </div>
        <p className="block-title">
          Développeur web, passionné par la création d’expériences numériques
          innovantes et performantes. Toujours curieux, j’adore relever des
          défis et transformer des lignes de code en solutions concrètes. Entre
          passion et rigueur, je suis prêt à embarquer dans une nouvelle
          aventure professionnelle et à booster vos projets web.
        </p>
      </div>  
      <hr />
      <section className="main-section">
        <h2 className="section-title">Mes Compétences</h2>
        <Skills />
      </section>
      <hr />
      <section className="main-section">
        <h2 className="section-title">Mon parcours</h2>
        <Timeline milestones={milestones} />
      </section>
      <hr />
      <section className="main-section">
        <h2 className="section-title">Mes Liens</h2>
        <div className="f-row gap-2">
          <div className="f-row">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/maxime-chevalier-dev/">@maxime-chevalier-dev</a>
          </div>
          <div className="f-row">
            <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub" />
            <a href="https://github.com/MaxChevalier">@MaxChevalier</a>
          </div>
          <div className="f-row">
            <img src="https://img.icons8.com/color/48/000000/gmail--v1.png" alt="Email" />
            <a href="mailto:maximechevalier2307@gmail.com">maximechevalier2307@gmail.com</a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
