import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderHome } from './HeaderHome';
import ExploreProjects from './ExploreProjects';

export const Home =()=>(
  <div>
    <HeaderHome/>
    <ExploreProjects/>
  </div>
)