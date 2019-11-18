import React, { Component } from 'react';
import {connect} from "react-redux"

class ProjectsViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ProjectsViewPage/>
          );
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects
})
  
   
   const mapDispatchToProps = dispatch => ({
    startGetProject: () => dispatch(startGetProject())
   });
   
   export default connect(
     mapStateToProps,
     mapDispatchToProps
   )(ProjectsViewPage);
