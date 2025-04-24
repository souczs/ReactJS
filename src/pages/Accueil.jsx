import Photo from '../assets/img/john-doe-about.jpg'

const Accueil = () => {
    return (
        <div>
            <div id="accueil">
                <div id="overlay"></div>
                    <div id="discover">
                        <h1>Bienvenue ! Je suis John Doe</h1>
                        <h2>Developpeur web Full Stack</h2>
                        <button
                            type="button"
                            className="btn btn-light"
                            onClick={() => {
                                const target = document.getElementById("presentation");
                                if (target) {
                                const offset = 90;
                                const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: "smooth"
                                });
                                }
                            }}>
                            En savoir plus
                        </button>
                    </div>
            </div>
            <div className="mt-5 mb-5" id="presentation">
                <section id="bloc" className="container row mx-auto bg-white shadow p-4 rounded">
                    <article className="col-12 col-md-6 mb-4">
                        <h1>À propos</h1>
                        <p className="pt-5" id="aboutme"> Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <strong>d'intégrateur-développeur web</strong> au CEF.<br />Au cours de cette formation j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.<br />
                            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>developpeur web full stack</strong>.<br />
                            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </article>
                    <article className="col-12 col-md-6">
                        <h1>Mes compétences</h1>
                        <img src={Photo} alt="pictureofme" className="img-thumbnail h-40 w-75 align-center mb-4" />
                        <div className="progress" style={{ backgroundColor: "white" }} id="progress1">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            </div>
                        <p>HTML5</p>

                            <div className="progress" style={{ backgroundColor: "white" }} id="progress2">
                            <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            </div>
                        <p>CSS3</p>

                            <div className="progress" style={{ backgroundColor: "white" }} id="progress3">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            </div>
                        <p>JAVASCRIPT</p>

                            <div className="progress" style={{ backgroundColor: "white" }} id="progress4">
                            <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            </div>
                        <p>REACT</p>
                    </article>
                </section>
            </div>
        </div>
    );
}

export default Accueil;