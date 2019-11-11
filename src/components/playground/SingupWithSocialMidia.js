import React from 'react';

export const SingupWithSocialMidia= ()=>(
    <div className="card-header bg-white pb-5">
                <div className="text-muted text-center mb-3"><small>Sign up with</small></div>
                <div className="text-center">
                  <a href="#" className="btn btn-neutral btn-icon mr-4">
                    <span className="btn-inner--icon">
                      <img src="../assets/img/icons/common/github.svg" alt="image"/>
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </a>
                  <a href="#" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <img src="../assets/img/icons/common/google.svg" alt="image"/>
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </a>
                </div>
              </div>
)

export default SingupWithSocialMidia;