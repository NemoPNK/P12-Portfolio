import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import PageTitle from '../../components/PageTitle/PageTitle.jsx'
import './Contact.css'

function Contact() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <PageTitle title="ME CONTACTER" />

        <section className="contact-section">
          <div className="contact-content">
            <p>
              Vous souhaitez échanger à propos d’une opportunité, d’un projet ou simplement discuter de développement web ?
            </p>

            <p>
              N'hésitez pas à me contacter via LinkedIn ou par e-mail. Je serai ravi d'échanger avec vous et de répondre à vos questions.
            </p>
          </div>
        </section>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/léopold-david-1659b12b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon LinkedIn
          </a>

          <a href="mailto:leopold.david@icloud.com">
            M'envoyer un mail
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Contact
