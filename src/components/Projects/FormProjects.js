import React from 'react';
import {ProjectTitle, Budget, DropZone} from "./CardsForm"
import DatePicker from "react-datepicker";

class FormProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          categorias:props.project ? props.project.description : "",
          startDate: new Date(),
          sumary: props.project ? props.project.sumary : "",
          description: props.project ? props.project.description : "",
          titleProject: props.project ? props.project.titleProject: "",
          budget: props.project? props.project.budget:"",
          photo: props.project ? props.project.photo: []
         }
        }
  
        onSubmit(){
          this.props.onSubmit({
            title: this.state.titleProject,
            description:this.state.description,
            summary:this.state.sumary,
            deadline: this.state.startDate,
            budget: this.state.budget,
            categories: this.state.categorias,
            images :  this.state.photo
          })
        }

    onHandleChange=(event)=> {
      this.onHandle(event.target.name,event.target.value);
    };
    onHandle = (prop, val) => {
      this.setState({ [prop]: val })
    };
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
    onPhotoHandler = evt=>{
      console.log("oi")
      const arrayPhoto=this.state.photo;
      let photo;
      var tgt = evt.target || window.event.srcElement,
      files = tgt.files;
    // FileReader support
      if (FileReader && files && files.length) {
        console.log(files[0])
        var fr = new FileReader();
        fr.onload = ()=>{
          photo = fr.result;
          console.log(photo)
          arrayPhoto.push({"image": {photo}})
          this.setState({photo:arrayPhoto})
        }
            console.log(photo)
          fr.readAsDataURL(files[0]);
        }
    }
    render() { 
        return (
        <div>
            <div className="main-content">
  <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center header-default-custom"  >
    {/* <!-- Mask --> */}
    <span className="mask bg-gradient-custom opacity-8"></span>
    {/* <!-- Header container --> */}
    <div className="container-fluid d-flex align-items-center">
      <div className="row">
        <div className="col-lg-7 col-md-10">
          <h1 className="display-2 text-white">Olá, {this.state.fullName}</h1>
          <p className="text-white mt-0 mb-5">Esta é a página de edição. Complete todo o cadastro para acessar as funcionalidades da plataforma.</p>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Page content --> */}
  <div className="container-fluid mt--100">
    <div className="row">

      <div className="col-xl-8 mr-15-custom order-xl-1">
        <div className="card bg-secondary shadow">
          <div className="card-header bg-white border-0">
            <div className="row align-items-center">
              <div className="col-8">
                <h3 className="mb-0">Projetos</h3>
              </div>
              <div className="col-4 text-right">
                <button className="btn btn-sm btn-primary" onClick={this.onSubmit}>Salvar</button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form>
              <h6 className="heading-small text-muted mb-4">Informação do Projeto </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <ProjectTitle titleProject={this.state.titleProject}  onFullNameChange={this.onHandleChange}/>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-birthDate">Periodo Estimado para o projeto</label>
                      
                      <div className="form-control form-control-alternative" >
                      {/* <SingleDatePicker
                        date={this.state.birthDate}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        displayFormat="DD/MM/YYYY"
                        isOutsideRange={() => false}
                       /> */}
                       <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          dateFormat="dd/MM/yyyy"
                       
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                     <Budget budget={this.state.budget} onHandleChange={this.onHandleChange}/>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-last-name">Categoria </label>
                      <select class="form-control" value={this.state.categorias} onChange={this.handleChange}>
                          <option value="construcao">Construção</option>
                          <option value="tecnologia">Tecnologia</option>
                          <option value="saude">Saúde</option>
                          <option value="agronomia">Agronomia</option>
                        </select>
 
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              {/* <!-- Address --> */}
              <h6 className="heading-small text-muted mb-4">Imagens do Projeto</h6>
              <div className="pl-lg-4">
                  <DropZone onPhotoHandler={this.onPhotoHandler}/>
              </div>
              <hr className="my-4" />
              {/* <!-- Description --> */}
              <h6 className="heading-small text-muted mb-4">Descrições</h6>
              <div className="pl-lg-4">
                <div className="form-group">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Resumo</label>
                      <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="2" 
                        name="sumary"
                        value={this.state.sumary}
                        onChange={this.onHandleChange}  
                      ></textarea>
                    </div>
                  </div>     
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-address">Descricao</label>
                      <textarea 
                      className="form-control" 
                      id="exampleFormControlTextarea1" 
                      rows="3"
                      name="description"
                      value={this.state.description}
                      onChange={this.onHandleChange}
                      ></textarea>
                    </div>
                  </div>     
                </div>
                  {/* <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ...">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>

</div> 

        </div>
        
        );
    }
}
 
export default FormProjects;