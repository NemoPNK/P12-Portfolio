import './ProjetBubble.css'

function ProjetBubble({
  contexte,
  objectifs,
  stack,
  competences,
  resultats,
  perspectives,
  height = '1200px',
}) {
  return (
    <div className="project-bubble">
      <svg
        className="project-bubble__svg"
        viewBox="0 0 1320 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ height }}
        preserveAspectRatio="none"
      >
        <path
          d="M368.672 0.624465C482.675 -5.78316 545.945 39.2392 660 38.9428C771.846 38.6522 833.848 -4.80424 945.656 0.624465C1027.78 4.61179 1072.88 42.9335 1155 38.9428C1219.87 35.7903 1319.87 0.669585 1320 0.624465V1199.38C1320 1199.38 1219.92 1163.88 1155 1161.06C1075.08 1157.58 1031.24 1194.88 951.328 1199.38C837.325 1205.78 774.055 1160.76 660 1161.06C548.154 1161.35 486.152 1204.8 374.344 1199.38C292.222 1195.39 247.122 1157.07 165 1161.06C100.131 1164.21 0.145492 1199.32 0 1199.37V0.624465C0.101625 0.6605 100.113 36.1174 165 38.9428C244.924 42.423 288.763 5.1158 368.672 0.624465Z"
          fill="#535353"
          fillOpacity="0.7"
        />
      </svg>

      <div className="project-bubble__content">
        <div className="project-bubble__infos">
          <section className="project-bubble__section">
            <h3>Contexte</h3>
            <p>{contexte}</p>
          </section>

          <section className="project-bubble__section">
            <h3>Objectifs</h3>
            <p>{objectifs}</p>
          </section>

          <section className="project-bubble__section">
            <h3>Stack technique</h3>
            <p>{stack}</p>
          </section>

          <section className="project-bubble__section">
            <h3>Compétences développées</h3>
            <p>{competences}</p>
          </section>

          <section className="project-bubble__section">
            <h3>Résultats et impact</h3>
            <p>{resultats}</p>
          </section>

          <section className="project-bubble__section">
            <h3>Perspectives d'amélioration</h3>
            <p>{perspectives}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ProjetBubble