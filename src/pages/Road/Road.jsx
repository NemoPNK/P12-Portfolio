import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import PageTitle from '../../components/PageTitle/PageTitle.jsx'
import './Road.css'

function Road() {
  return (
    <>
      <Header />

      <main className="road-page">
        <PageTitle title="MON PARCOURS" />

        <section className="road-introduction">

          <div className="road-introduction__content">
            <p>
              Après le lycée, j’ai choisi de me former au développement web à travers le parcours Développeur Web d’OpenClassrooms en alternance.
            </p>

            <p>
              Cette formation à distance m’a permis d’acquérir progressivement des compétences techniques tout en les appliquant dans un contexte professionnel réel.
            </p>

            <p>
              Ce qui m’a particulièrement attiré dans ce métier est la possibilité de travailler sur des projets concrets et de voir une idée prendre vie à travers le code. Au fil de mon parcours, j’ai développé des compétences en intégration web, développement front-end, gestion de projet et bonnes pratiques de développement.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Road
