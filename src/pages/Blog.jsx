import Bannière from '../assets/img/banner.jpg'
import articles from '../data/articles'

const Blog = () => {
    return (
        <div id="blog">
            <img src={Bannière} alt="banner" className="pt-3 w-100"/>
            <section className="pt-5 text-center">
                <h1>Blog</h1>
                <h6>Retrouvez ici quelques articles sur le développement web.</h6>
                <div id="underline"></div>
            </section>
            <section className="container my-5 text-center">
                    <div className="row">
                        {articles.map((article) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={article.id}>
                                <div className="card h-100 shadow">
                                <img className="card-img-top" src={article.img} alt={`Img de ${article.titre}`} />
                                <div className="card-body">
                                    <h3 className="card-title">{article.titre}</h3>
                                    <p className="card-text">{article.description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{article.footer}</small><br />
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => window.open(article.lien, "_blank")} rel="noreferrer noopener">Lire la suite</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
            </section>
        </div>
    );
}

export default Blog;