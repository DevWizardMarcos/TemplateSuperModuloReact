import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__card">
        <div className="contact__info">
          <span className="contact__icon">📨</span>

          <div>
            <h2 className="contact__title">Vamos trabalhar juntos?</h2>
            <p className="contact__text">
              Estou disponível para novos projetos e oportunidades.
            </p>
          </div>
        </div>

        <a
          className="button button--primary"
          href="mailto:seuemail@email.com"
        >
          Enviar mensagem 🚀
        </a>
      </div>
    </section>
  );
}

export default Contact;
