import React from 'react';

export const CardPhoto = (props)=>(
    <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
        <div className="card card-profile shadow">
          <div className="row justify-content-center">
            <div className="col-lg-3 order-lg-2">
              <div className="card-profile-image">
                <a href="#">
                  <img src={props.photo} className="rounded-circle img-box-custom"/>
                </a>
              </div>
            </div>
          </div>
          <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between">
               <label htmlFor="file" className="btn btn-sm btn-info mr-4"> <i className="fas fa-edit"></i> Edit</label>
              <input id="file" type="file" onChange={props.onPhotoHandler} className="inputfile" name="file" readOnly/>
            </div>
          </div>
          <div className="card-body pt-0 pt-md-4">
            <div className="row">
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                 
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3>
                Descrição<span className="font-weight-light"></span>
              </h3>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" readOnly></textarea>
            </div>
          </div>
        </div>
      </div>
)

export default CardPhoto