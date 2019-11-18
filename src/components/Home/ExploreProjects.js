import React from 'react';
import {connect} from "react-redux";
import {startGetProjects} from "../../actions/projects";
import {Link} from "react-router-dom"
import api from "../../axios/api"



class ExploreProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project:[]  }
    }

    onHandleProject=(project)=>{
        console.log(project)
        this.setState({project})
    }

    componentWillMount=()=>{
        api.get("/project/").then( (response)=> {
            console.log(response.data)
              this.onHandleProject(response.data)
          })
        this.props.startGetProjects()
    }
    componentDidMount=()=>{
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
                                    {/* <Link to={`/viewproject/${this.state.project[1].id}`}> */}
                                    <div className="card card-lift--hover shadow border-0">
                                        <div className="card-body py-5">
                                            {console.log(this.state.project[1])}
                                          {/* <img src={}/> */}
                                            <h6 className="text-primary text-uppercase">PROJECT1</h6>
                                            <p className="description mt-3">
                                               LorinnLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius felis nec nisl bibendum venenatis. Nulla arcu arcu, mollis a sem ut, auctor bibendum risus. Quis
                                            </p>
                                        </div>
                                    </div>
                                    {/* </Link> */}
                                </div>
                                <div className="col-lg-4">
                                    <div className="card card-lift--hover shadow border-0">
                                        <div className="card-body py-5">
                                          
                                            <h6 className="text-success text-uppercase">PROJECT2</h6>
                                            <p className="description mt-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius felis nec nisl bibendum venenatis. Nulla arcu arcu, mollis a sem ut, auctor bibendum risus. Quis
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card card-lift--hover shadow border-0">
                                        <div className="card-body py-5">
                                         
                                            <h6 className="text-warning text-uppercase">PROJECT3</h6>
                                            <p className="description mt-3">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius felis nec nisl bibendum venenatis. Nulla arcu arcu, mollis a sem ut, auctor bibendum risus. Quis
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

