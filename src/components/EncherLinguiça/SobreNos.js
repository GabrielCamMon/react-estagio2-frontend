import React from 'react';
import HeaderNavPublic from "../Header/HeaderNavPublic"

export const SobreNos = () => (
    <div>
        <HeaderNavPublic />
        <main>
            <div className="position-relative">

                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-1 shape_background">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="container py-lg-md d-flex">
                        <div className='col-md-7'>
                            <div className="col px-0">
                                <div className="row">
                                    <h1 className="display-3  text-white">QUEM SOMOS<span style={{ fontSize: "14px" }}>Quanto mais espantosa for ideia, mais importante será a inovação.</span></h1>
                                    <p className="lead  text-white">A Innovation Dreams foi pensada para aquelas pessoas que tem ideias, mas não sabem como começar e para pessoas interessadas em investir em projetos. Ajudamos a tirar a sua ideia do papel!</p>

                                </div>
                            </div>


                        </div>
                        <div className='col-md-5'>
                            <img className="img-sobre-nos" src="/images/logo_white.png" alt="brand" />
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
            </div>
            <section className="section section-lg pt-lg-0 mt--200">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="row row-grid">
                                <div className="col-lg-4">
                                    <div className="card card-lift--hover shadow border-0">
                                        <div className="card-body py-5">
                                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                <i className="fas fa-bullseye"></i>
                                            </div>
                                            <h6 className="text-primary text-uppercase">MISSÃO</h6>
                                            <p className="description mt-3">
                                                Trazer projetos criativos, inovadores e de qualidade ao mundo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card card-lift--hover shadow border-0">
                                        <div className="card-body py-5">
                                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                <i className="fas fa-eye"></i>
                                            </div>
                                            <h6 className="text-success text-uppercase">VISÃO</h6>
                                            <p className="description mt-3">
                                                Nosso objetivo é ser referência como empresa produtora de ideias e inovações.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card card-lift--hover shadow border-0">
                                        <div className="card-body py-5">
                                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <h6 className="text-warning text-uppercase">VALOR</h6>
                                            <p className="description mt-3">
                                                Nossos valores é valorizar e respeitar às pessoas e responsabilidade social.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-lg">
      <div className="container">
        <div className="row justify-content-center text-center mb-lg">
          <div className="col-lg-8">
            <h2 className="display-3">Nosso Time</h2>
            <p className="lead text-muted">
                Coisas incríveis no mundo dos negócios nunca são feitas por uma única pessoa, e sim por uma equipe
            </p>
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="px-4">
                <img  className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '200px'}}  src="/images/gabriel_monteiro.jpg" alt="brand" />
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Gabriel Campos Monteiro</span>
                  <small className="h6 text-muted">Diretor de Estratégia</small>
                </h5>
                <div className="mt-3">
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="px-4">
            
                <img className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '200px'}}  src="/images/alexandre_ribeiro.jpg" alt="brand" />
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Alexandre Oliveira Ribeiro</span>
                  <small className="h6 text-muted">Diretor Comercial</small>
                </h5>
                <div className="mt-3">
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div className="px-4">
                <img className="rounded-circle img-center img-fluid shadow shadow-lg--hover" style={{width: '200px'}}  src="/images/patricia_cunha.jpg" alt="brand" />
              <div className="pt-4 text-center">
                <h5 className="title">
                  <span className="d-block mb-1">Patricia Cunha de Lima</span>
                  <small className="h6 text-muted">Diretora de Marketing</small>
                </h5>
                <div className="mt-3">
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="btn btn-primary btn-icon-only rounded-circle">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </main>
    </div>
)