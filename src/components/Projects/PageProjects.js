import React from 'react';
import { connect } from "react-redux";
import { startAddProject } from "../../actions/projects"
import FormProjects from './FormProjects';


class PageProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    onSubmit=(project)=>{
        this.props.startAddProject(project)
    }
    render() { 
        return ( 
               <div>
                   <FormProjects onSubmit={this.onSubmit}/>
               </div>
         );
    }
}
 

const mapStateToProps = (state) => ({})
  
   
   const mapDispatchToProps = dispatch => ({
    startAddProject: (project) => dispatch(startAddProject(project))
   });
   
   export default connect(
     undefined,
     mapDispatchToProps
   )(PageProjects);
