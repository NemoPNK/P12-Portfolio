import { useState } from 'react'
import './Roue.css'
import AgileLogo from '../../../assets/Picto/Agile.png'
import GitLogo from '../../../assets/Picto/Git.png'
import HtmlLogo from '../../../assets/Picto/HTML.png'
import JsLogo from '../../../assets/Picto/JS.png'
import ReactLogo from '../../../assets/Picto/React.webp'
import SassLogo from '../../../assets/Picto/Sass.png'

const skills = [
  {
    name: 'Agile',
    color: '#FF2828',
    description: "Méthode de travail qui aide à organiser un projet par étapes courtes, avec des objectifs clairs et des ajustements réguliers.",
    logo: AgileLogo,
  },
  {
    name: 'GitHub',
    color: '#2b2b2b',
    description: "Outil utilisé pour versionner le code, suivre l'historique des modifications et partager un projet proprement.",
    logo: GitLogo,
  },
  {
    name: 'React',
    color: '#61dafb',
    description: "Bibliothèque JavaScript permettant de créer des interfaces dynamiques avec des composants réutilisables.",
    logo: ReactLogo,
  },
  {
    name: 'HTML',
    color: '#ff4d00',
    description: "Langage qui structure le contenu d'une page web avec des balises claires et sémantiques.",
    logo: HtmlLogo,
  },
  {
    name: 'Sass / CSS',
    color: '#c767a0',
    description: "Langages utilisés pour styliser les interfaces, gérer le responsive et créer des animations visuelles.",
    logo: SassLogo,
  },
  {
    name: 'JavaScript',
    color: '#ffe200',
    description: "Langage qui permet d'ajouter de l'interactivité, de manipuler les données et de gérer la logique côté front-end.",
    logo: JsLogo,
  },
  {
    name: 'API',
    color: '#4db225',
    description: "Interface qui permet à une application de communiquer avec un service externe pour récupérer ou envoyer des données.",
  },
  {
    name: 'Qualité web',
    color: '#3564ff',
    description: "Ensemble de bonnes pratiques liées à l'accessibilité, au SEO, aux performances et à la lisibilité du code.",
  },
]

const CX = 240
const CY = 240
const OUTER_RADIUS = 210
const INNER_RADIUS = 80
const LABEL_RADIUS = 145

function polarToPoint(radius, angle) {
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  }
}

function createSegmentPath(startAngle, endAngle) {
  const outerStart = polarToPoint(OUTER_RADIUS, startAngle)
  const outerEnd = polarToPoint(OUTER_RADIUS, endAngle)
  const innerStart = polarToPoint(INNER_RADIUS, startAngle)
  const innerEnd = polarToPoint(INNER_RADIUS, endAngle)
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0

  return `M ${outerStart.x} ${outerStart.y} A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y} L ${innerEnd.x} ${innerEnd.y} A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y} Z`
}

function Roue({ selectedSkill, onSelectSkill }) {
  const angleStep = (Math.PI * 2) / skills.length

  const [hoveredSkill, setHoveredSkill] = useState(null)

  const prioritySkill = hoveredSkill || selectedSkill?.name

  const orderedSkills = prioritySkill
    ? [
        ...skills.filter((skill) => skill.name !== prioritySkill),
        skills.find((skill) => skill.name === prioritySkill),
      ]
    : skills

  return (
    <div className="roue">
      <svg className="roue__svg" viewBox="0 0 480 480" aria-label="Roue des compétences">
        {orderedSkills.map((skill) => {
          const index = skills.findIndex((currentSkill) => currentSkill.name === skill.name)
          const startAngle = -Math.PI / 2 + index * angleStep
          const endAngle = startAngle + angleStep
          const middleAngle = startAngle + angleStep / 2
          const labelPoint = polarToPoint(LABEL_RADIUS, middleAngle)
          const isSelected = selectedSkill?.name === skill.name

          return (
            <g
              key={skill.name}
              className={isSelected ? 'roue__item roue__item--selected' : 'roue__item'}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => onSelectSkill(skill)}
            >
              <path
                className="roue__segment"
                d={createSegmentPath(startAngle, endAngle)}
                fill={skill.color}
              />

              {skill.logo ? (
                <image
                  className="roue__logo"
                  href={skill.logo}
                  x={labelPoint.x - 22}
                  y={labelPoint.y - 22}
                  width="44"
                  height="44"
                />
              ) : (
                <text
                  className="roue__label"
                  x={labelPoint.x}
                  y={labelPoint.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {skill.name}
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export { skills }
export default Roue