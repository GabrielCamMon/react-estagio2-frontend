import React from 'react'
import {Link} from 'react-router-dom';

export const HeaderHome = ()=>(
    <div className="position-relative">
    {/* <!-- shape Hero --> */}
    <section className="section section-lg section-shaped pb-250">
      <div className="shape shape-style-1 shape-default">
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
        <div className="col px-0">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-3  text-white">Publique a sua ideia<span>ou invista na ideia que vai dar dinheiro</span></h1>
              <p className="lead  text-white">A Innovation Dreams foi pensada para aquelas pessoas que tem ideias, mas não sabem como começar e para pessoas interessadas em investir em projetos. Ajudamos a tirar a sua ideia do papel!</p>
              <div className="btn-wrapper">
                <Link to="/sobreNos" className="btn btn-white btn-icon mb-3 mb-sm-0">
                  {/* <span className="btn-inner--icon"><i className="ni ni-cloud-download-95"></i></span> */}
                  <span className="btn-inner--text">Saiba mais</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SVG separator --> */}
      <div className="separator separator-bottom separator-skew">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    {/* <!-- 1st Hero Variation --> */}
  </div>
)