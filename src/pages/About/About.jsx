import Header from '../../components/Header/Header.jsx'
import PageTitle from '../../components/PageTitle/PageTitle.jsx'
import AboutBubble from '../../components/AboutBubble/AboutBubble.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import photoLeopold from '../../assets/Photo-Leopold.png'
import './About.css'

function About() {
  return (
    <>
      <Header />
      <main>
        <PageTitle title="À PROPOS DE MOI ?" />

        <section className="about-section">
          <img
            className="about-photo"
            src={photoLeopold}
            alt="Portrait de Léopold David"
          />

          <div className="about-content">
            <AboutBubble
              title="Qui suis-je ?"
              text="Je m'appelle Léopold David, intégrateur web junior spécialisé en React."
            />

            <AboutBubble
              title="Ce que je fais"
              text="Je conçois des interfaces harmonieuses, performantes et accessibles, avec une attention particulière portée à l'expérience utilisateur."
            />

            <AboutBubble
              title="Mon approche"
              text="J'accorde une grande importance à la qualité du code, au SEO, à l'accessibilité et à la maintenabilité des projets."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About
