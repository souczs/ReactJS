/* eslint-disable jsx-a11y/iframe-has-title */
import gps from '../assets/img/carte-et-localisation.png'
import tel from '../assets/img/appel.png'

const Contact = () => {
    return (
        <div className="mt-5" id="contact">
            <div id="overlay2">
                <div className="container row mx-auto bg-white shadow p-2 mt-5 rounded">
                    <section className="pt-4 text-center">
                        <h1>Me contacter</h1>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div id="underline"></div>
                    </section>
                    <section className="row mt-5" id="contact-bloc">
                        <article className="col-12 col-md-6" id="contact-form">
                            <h4>Formulaire de contact</h4>
                            <form action="" method="post">
                                <input type="text" className="form-control mb-3 mt-3" id="FormControlInput1" placeholder="Votre nom" required />
                                <input type="email" className="form-control mb-3" id="FormControlInput2" placeholder="Votre adresse email" required />
                                <input type="tel" className="form-control mb-3" id="FormControlInput3" placeholder="Votre numéro de téléphone" required />
                                <input type="text" className="form-control mb-3" id="FormControlInput4" placeholder="Sujet" required />
                                <textarea className="form-control mb-3" id="FormControlTextarea1" rows="3" placeholder="Votre message" required></textarea>
                            </form>
                            <button type="button" className="btn btn-secondary mt-2 mb-3">Soumettre ma demande</button>
                        </article>
                        <article className="col-12 col-md-6" id="contact-data">
                            <h4>Mes coordonnées</h4>
                            <address className="mt-3">
                                <img src={gps} alt="Loc icon" id="contact-icon" />
                                40 rue Laure Diebold
                                69009 Lyon, France<br />
                                <img src={tel} alt="Loc icon" id="contact-icon" /><a href="tel:0620304050">0620304050</a><br />
                            </address>
                            <div id="carte">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.254304936407!2d4.7963986111221!3d45.7786619709601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1745517945041!5m2!1sfr!2sfr" width="515" height="230" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Contact;