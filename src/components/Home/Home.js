import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderHome } from './HeaderHome';
import ExploreProjects from './ExploreProjects';
import { Footer } from '../footer/Footer';

export const Home =()=>(
  <div>
    <HeaderHome/>
    <ExploreProjects/>
    <Footer/>
  </div>
)