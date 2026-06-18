import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Projects.css'

import PageTitle from '../../components/PageTitle/PageTitle.jsx'
import Projet from '../../components/Projet/Projet.jsx'
import KasaDesktop from '../../assets/Projet/Kasa-Desktop.webp'
import KasaMobile from '../../assets/Projet/Kasa-Mobile.webp'
import ReactLogo from '../../assets/Picto/React.webp'
import JsLogo from '../../assets/Picto/JS.png'
import OMFDesktop from '../../assets/Projet/omf-desktop.webp'
import OMFMobile from '../../assets/Projet/omf-mobile.webp'
import SassLogo from '../../assets/Picto/Sass.png'
import HtmlLogo from '../../assets/Picto/HTML.png'

function Projects() {
  return (
    <>
      <Header />

      <main>
        <PageTitle title="MES PROJETS" />

        <Projet
          title="Plateforme de location immobilière React"
          techLogo={ReactLogo}
          techLogo2={JsLogo}
          mobileImage={KasaMobile}
          desktopImage={KasaDesktop}
          contexte="Développement du front-end d’une plateforme de location immobilière à partir de maquettes fournies, en utilisant React et React Router pour créer une application web moderne et dynamique."
          objectifs="Mettre en place une navigation entre plusieurs pages, afficher des données provenant d’un fichier JSON et construire une interface basée sur des composants réutilisables."
          stack="React, React Router, JavaScript, HTML et CSS."
          competences="Création de composants React, gestion du routage avec React Router, affichage dynamique de données, intégration responsive et mise en place d’animations CSS."
          resultats="Développement d’une application monopage performante offrant une navigation fluide, un affichage dynamique des logements et une expérience utilisateur fidèle aux maquettes."
          perspectives="Connecter l’application à une API réelle, ajouter une gestion avancée des états et optimiser davantage les performances et l’accessibilité."
        />
        <Projet
          title="Expérience de restauration mobile-first"
          techLogo={SassLogo}
          techLogo2={HtmlLogo}
          mobileImage={OMFMobile}
          desktopImage={OMFDesktop}
          contexte="Intégration de l'interface d'une plateforme de réservation de restaurants à partir de maquettes Figma fournies en adoptant une approche mobile-first."
          objectifs="Créer une interface responsive fidèle aux maquettes, mettre en œuvre des animations CSS et structurer les styles avec Sass."
          stack="HTML, Sass, CSS, Git, GitHub et Figma."
          competences="Intégration mobile-first, animations CSS, organisation du code avec Sass et gestion de version avec Git et GitHub."
          resultats="Création d'une interface responsive respectant les maquettes et offrant une expérience utilisateur fluide sur mobile et desktop."
          perspectives="Améliorer l'accessibilité, enrichir les animations et optimiser davantage les performances des ressources graphiques."
        />
      </main>

      <Footer />
    </>
  )
}

export default Projects;
