import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='brand-logo'/>
    </div>
    <div>
      <img src={slack} alt='brand-logo'/>
    </div>
    <div>
      <img src={atlassian} alt='brand-logo'/>
    </div>
    <div>
      <img src={dropbox} alt='brand-logo'/>
    </div>
    <div>
      <img src={shopify} alt='brand-logo'/>
    </div>
  </div>
);

export default Brand;