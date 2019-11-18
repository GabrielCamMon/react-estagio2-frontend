import React from 'react';
import {connect} from "react-redux";
import {startGetProjects} from "../../actions/projects";



class ExploreProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount=()=>{
        this.props.startGetProjects()
    }
    render() { 
        return ( 
            <section className="section section-lg">
      <div className="container">
        <div className="row justify-content-center text-center mb-lg">
          <div className="col-lg-8">
            <h2 className="display-3">Explore os Projetos</h2>
            <p className="lead text-muted">Encontre projetos que lhe interesse para que você possa transformar o seu negócio.</p>
          </div>
        </div>

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
         );
    }
}
const mapStateToProps = (state) => {

   return {
     projects: state.projects
   };
 };

 
 const mapDispatchToProps = dispatch => ({
   startGetProjects: () => dispatch(startGetProjects()) 
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(ExploreProjects);

