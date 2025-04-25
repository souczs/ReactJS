import { Link } from 'react-router-dom';
import ScrollToTopButton from './Totop';
import projets from '../data/projets';
import articles from '../data/articles';

const Footer = () => {
    return (
        <div>
            <footer class="text-lg-start bg-body-tertiary text-muted">
                <section>
                    <div class="container text-md-start mt-4">
                        <div class="row mt-3">
                            <div class="col-12 col-md-6 col-lg-3 mx-auto mb-4">
                                <h6 class="fw-bold mb-2">John Doe</h6>
                                <address>
                                    40 rue Laure Diebold<br />
                                    69009 Lyon, France<br />
                                    <a href="tel:0620304050">0620304050</a>
                                </address>
                                    <a href="https://github.com" target="_blank" class="text-dark me-3" rel="noreferrer noopener"><i class="bi bi-github fs-4"></i></a>
                                    <a href="https://twitter.com" target="_blank" class="text-dark me-3" rel="noreferrer noopener"><i class="bi bi-twitter fs-4"></i></a>
                                    <a href="https://instagram.com" target="_blank" class="text-dark me-3" rel="noreferrer noopener"><i class="bi bi-instagram fs-4"></i></a>
                                    <a href="https://linkedin.com" target="_blank" class="text-dark me-3" rel="noreferrer noopener"><i class="bi bi-linkedin fs-4"></i></a>
                            </div>
                            <ul class="fleches-unicode-alt col-12 col-md-6 col-lg-3 mx-auto mb-4">
                                <h6 class="fw-bold mb-2">Liens utiles</h6>
                                <li><Link className="nav-link" to="/">A propos</Link></li>
                                <li><Link className="nav-link" to="/services">Services</Link></li>
                                <li><Link className="nav-link" to="/contact">Me contacter</Link></li>
                                <li><Link className="nav-link" to="/mentions">Mentions légales</Link></li>
                            </ul>
                            <ul className="fleches-unicode-alt col-12 col-md-6 col-lg-3 mx-auto mb-4">
                                <h6 className="fw-bold mb-2">Dernières réalisations</h6>
                                {projets.slice(0, 3).map((projet) => (
                                    <li key={projet.id}>
                                        <a className="nav-link" href={projet.lien} target="_blank" rel="noreferrer noopener">
                                        {projet.titre}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="fleches-unicode-alt col-12 col-md-6 col-lg-3 mx-auto mb-4">
                                <h6 className="fw-bold mb-2">Derniers articles</h6>
                                {articles.slice(0, 4).map((article) => (
                                    <li key={article.id}>
                                        <a className="nav-link" href={article.lien} target="_blank" rel="noreferrer noopener">
                                        {article.titre}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <copyright>
                    <div class="container-expand-lg bg-dark fixed-bottom text-white text-center" id="copyright">
                        <ScrollToTopButton />
                        <p><strong>&copy; Designed by John Doe</strong></p>
                    </div>
                </copyright>
            </footer>
        </div>
    );
}

export default Footer;