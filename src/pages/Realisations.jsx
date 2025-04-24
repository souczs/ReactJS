import Bannière from '../assets/img/banner.jpg'
import projets from '../data/projets'

const Realisations = () => {

    return (
        <div id="projets">
            <img src={Bannière} alt="banner" className="pt-3 w-100"/>
            <section className="pt-5 text-center">
                <h1>Portfolio</h1>
                <h6>Voici quelques-unes de mes réalisations</h6>
                <div id="underline"></div>
            </section>
            <section className="container my-5 text-center">
                    <div className="row">
                        {projets.map((projet) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={projet.id}>
                                <div className="card h-100 shadow">
                                <img className="card-img-top" src={projet.img} alt={`Img de ${projet.titre}`} />
                                <div className="card-body">
                                    <h3 className="card-title">{projet.titre}</h3>
                                    <p className="card-text">{projet.description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{projet.code}</small><br />
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => window.open(projet.lien, "_blank")} rel="noreferrer noopener">Voir</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
            </section>
        </div>
    );
}

export default Realisations;