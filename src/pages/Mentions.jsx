import gps from '../assets/img/carte-et-localisation.png'
import tel from '../assets/img/appel.png'
import email from '../assets/img/email.png'
import internet from '../assets/img/internet.png'
import { useEffect } from 'react';


const Mentions = () => {
    useEffect(() => {
        const noIndex = document.createElement('meta');
        noIndex.name = 'robots';
        noIndex.content = 'noindex, nofollow';
        document.head.appendChild(noIndex);

        return () => {
            const noIndexToRemove = document.querySelector('meta[name="robots"]');
            if (noIndexToRemove) {
                document.head.removeChild(noIndexToRemove);
                }
            };
        },
    []);

    return (
            <div id="mentions">
                <section className="pt-5 text-center">
                    <h1>Mentions légales</h1>
                    <div id="underline"></div>
                </section>
                <section className="accordion mx-auto" id="accordion">
                    <div className="accordion-item">
                        <h1 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                        </h1>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h3>John Doe</h3>
                            <address>
                                <img src={gps} alt="Loc icon" id="mentions-icon" />
                                40 rue Laure Diebold<br />
                                69009 Lyon, France<br />
                                <img src={tel} alt="Loc icon" id="mentions-icon" /><a href="tel:0620304050">0620304050</a><br />
                                <img src={email} alt="Loc icon" id="mentions-icon" /><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                            </address>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h1 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                        </h1>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h3>CodeSandBox</h3>
                            <address>
                                Singel 542<br />
                                1017 AZ Amsterdam, Pays-Bas<br />
                                <img src={internet} alt="Loc icon" id="mentions-icon" />
                                <a href="https://codesandbox.io">codesandbox.io</a>
                            </address>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h1 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                        </h1>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                        <div className="accordion-body">
                            <h3>Crédits</h3>
                            <p>Site développé par John Doe, étudiant du CEF.</p>
                            <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" target="_blank" rel="noreferrer">Pixabay</a>.</p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default Mentions;