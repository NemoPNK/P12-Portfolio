import { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import PageTitle from '../../components/PageTitle/PageTitle.jsx'
import Roue from '../../components/Skills/Roue/Roue.jsx'
import RoueBubble from '../../components/Skills/RoueBubble/RoueBubble.jsx'
import './Skills.css'

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  return (
    <>
      <Header />

      <main className="skills-page">
        <PageTitle title="MES COMPÉTENCES" />

        <section className="skills-section">
          <div className="skills-bubbles">
            <RoueBubble
              title={selectedSkill ? selectedSkill.name : 'Choisissez une compétence'}
              text={selectedSkill ? selectedSkill.description : 'Sélectionnez une compétence sur la roue pour découvrir les technologies, outils et connaissances que je maîtrise.'}
            />
          </div>

          <Roue
            selectedSkill={selectedSkill}
            onSelectSkill={setSelectedSkill}
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Skills
