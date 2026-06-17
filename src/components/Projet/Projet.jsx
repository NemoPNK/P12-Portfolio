import './Projet.css'
import ProjetBubble from './ProjetBubble/ProjetBubble.jsx'

function Projet({
  title,
  techLogo,
  techLogo2,
  mobileImage,
  desktopImage,
  contexte,
  objectifs,
  stack,
  competences,
  resultats,
  perspectives,
}) {
  return (
    <article className="project-card">
      <h2 className="project-card__title">{title}</h2>

      <div className="project-card__content">
        <div className="project-card__visuals">
          <div className="project-card__tech">
            <img src={techLogo} alt="" />

            {techLogo2 && (
              <img src={techLogo2} alt="" />
            )}
          </div>

          <div className="project-card__screenshots">
            <img
              className="project-card__image project-card__image--mobile"
              src={mobileImage}
              alt={`Aperçu mobile du projet ${title}`}
            />

            <img
              className="project-card__image project-card__image--desktop"
              src={desktopImage}
              alt={`Aperçu desktop du projet ${title}`}
            />
          </div>
        </div>

        <ProjetBubble
          contexte={contexte}
          objectifs={objectifs}
          stack={stack}
          competences={competences}
          resultats={resultats}
          perspectives={perspectives}
        />
      </div>
    </article>
  )
}

export default Projet