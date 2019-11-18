import React from 'react';
import { Link } from 'react-router-dom'

export const Footer = () => (
    <footer className="footer has-cards">
        <div className="container">
            <div className="row row-grid align-items-center my-md">
                <hr />
                <div className="col-lg-6">
                    <h3 className="text-primary font-weight-light mb-2">Feito com amor!</h3>
                    <h4 className="mb-0 font-weight-light">Conheça nossas redes sociais.</h4>
                </div>
                <div className="col-lg-6 text-lg-center btn-wrapper">
                    <a className="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip" data-original-title="Follow us">
                        <i style={{ color: '#fff' }} className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip" data-original-title="Like us">
                        <i style={{ color: '#fff' }} className="fab fa-facebook-square"></i>
                    </a>
                    <a className="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip" data-original-title="Follow us">
                        <i style={{ color: '#fff' }} className="fab fa-linkedin"></i>
                    </a>
                    <a className="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip" data-original-title="Star on Github">
                        <i style={{ color: '#fff' }} className="fab fa-git"></i>
                    </a>
                </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-md-between">
                <div className="col-md-6">
                    <div className="copyright">
                        &copy; 2019 <Link to="/" >Innovation Dreams</Link>.
                    </div>
                </div>
                <div className="col-md-6">
                    <ul className="nav nav-footer justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobreNos" >Sobre Nós</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/GabrielCamMon/react-estagio2-frontend" className="nav-link" target="_blank">Frontend</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/alexolirib/inovation_dreams_backend" className="nav-link" target="_blank">Backend</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)