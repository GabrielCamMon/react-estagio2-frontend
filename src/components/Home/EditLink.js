import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

export const EditLink= ({user})=> (
  <div>
      <ul>
          <li>
            {console.log(user)}
              <Link to={`/user/edit/profile/${user.id}`}>Edit</Link>
          </li>
      </ul>
  </div>
)
 
const mapStateToProps = state => ({
  user: state.users
})
export default connect(mapStateToProps)(EditLink);