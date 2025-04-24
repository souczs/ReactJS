import Bannière from '../assets/img/banner.jpg'
import Ux from '../assets/img/ux.png'
import Seo from '../assets/img/seo.png'
import WWW from '../assets/img/click.png'

const Services = () => {
    return (
        <div id="services">
            <img src={Bannière} alt="banner" className="pt-3 w-100"/>
            <section className="pt-5 text-center">
                <h1>Mon offre de services</h1>
                <h6>Voici les prestations sur lesquelles je peux intervenir.</h6>
                <div id="underline"></div>
            </section>
            <section className="container my-5 text-center">
                <div className="row">
                    <article className="col-lg-4 col-md-4 mb-4 d-flex flex-wrap">
                        <div className="bg-white shadow p-4 rounded" id="services-bloc">
                            <img src={Ux} alt="ux-icon" id="services-icon"/>
                            <h4 className="pt-3">UX Design</h4>
                            <p className="pt-4">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                        </div>
                    </article>
                    <article className="col-lg-4 col-md-4 mb-4 d-flex flex-wrap">
                        <div className="bg-white shadow p-4 rounded" id="services-bloc">
                            <img src={WWW} alt="www-icon" id="services-icon"/>
                            <h4 className="pt-3">DEV WEB</h4>
                            <p className="pt-3">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                        </div>
                    </article>
                    <article className="col-lg-4 col-md-4 mb-4 d-flex flex-wrap">
                        <div className="bg-white shadow p-4 rounded" id="services-bloc">
                            <img src={Seo} alt="seo-icon" id="services-icon"/>
                            <h4 className="pt-3">SEO</h4>
                            <p className="pt-3">Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Services;