import React from 'react';


export const DropZone = props=>(
    <div className="card">
    {/* <!-- Card header --> */}
    <div className="card-header">
      <h3 className="mb-0">Dropzone</h3>
    </div>
    {/* <!-- Card body --> */}
    <div className="card-body">
    <div className="d-flex justify-content-between">
               <label htmlFor="file" className="btn btn-sm btn-info mr-4"> <i className="fas fa-edit"></i> Escolha suas fotos</label>
              <input id="file" type="file" onChange={props.onPhotoHandler} className="inputfile" name="file" readOnly/>
            </div>
    </div>
    </div>
           
)

export const ProjectTitle =props=>(
    <div className="form-group">
                      <label className="form-control-label" htmlFor="input-fullname">Titulo do Projeto *</label>
                      <input  
                      type="text" 
                      id="input-fullname"
                      name="titleProject"
                      className="form-control form-control-alternative" 
                      placeholder="Escreva o nome do projeto"
                      value={props.titleProject}
                      onChange={props.onFullNameChange}
                      />
                    </div>
)

export const Budget =  props =>(
    <div>
            <label className="form-control-label" htmlFor="input-fullname">Orçamento</label>
                      <input  
                      type="text" 
                      id="input-fullname" 
                      className="form-control form-control-alternative" 
                      name="budget"
                      placeholder="Orçamento"
                      value={props.budget}
                      onChange={props.onHandleChange}
                      />
    </div>
)