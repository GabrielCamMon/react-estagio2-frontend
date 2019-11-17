import React from 'react';


export const DropZone = props=>(
    <div class="card">
    {/* <!-- Card header --> */}
    <div class="card-header">
      <h3 class="mb-0">Dropzone</h3>
    </div>
    {/* <!-- Card body --> */}
    <div class="card-body">
      {/* <!-- Multiple --> */}
      <div class="dropzone dropzone-multiple" data-toggle="dropzone" data-dropzone-multiple data-dropzone-url="http://">
        <div class="fallback">
          <div class="custom-file">
            <input type="file" onChange={props.onPhotoHandler} class="custom-file-input" name="file" id="customFileUploadMultiple"  readOnly/>
            <label class="custom-file-label" htmlFor="file">Choose file</label> 
          </div>
        </div>
        <ul class="dz-preview dz-preview-multiple list-group list-group-lg list-group-flush">
          <li class="list-group-item px-0">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="avatar">
                  <img class="avatar-img rounded" src="...html" alt="..." data-dz-thumbnail/>
                </div>
              </div>
              <div class="col ml--3">
                <h4 class="mb-1" data-dz-name>...</h4>
                <p class="small text-muted mb-0" data-dz-size>...</p>
              </div>
              <div class="col-auto">
                <div class="dropdown">
                  <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fe fe-more-vertical"></i>
                  </a>
              
                </div>
              </div>
            </div>
          </li>
        </ul>
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