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
              title={selectedSkill ? selectedSkill.name : 'Aucune compétence sélectionnée'}
              text={selectedSkill ? selectedSkill.description : 'Aucune compétence sélectionnée.'}
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
