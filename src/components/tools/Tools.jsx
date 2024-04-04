import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './tools.css';

const Tools = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='Tool' />
    </div>
    <div>
      <img src={slack} alt='Tool'/>
    </div>
    <div>
      <img src={atlassian} alt='Tool'/>
    </div>
    <div>
      <img src={dropbox} alt='Tool'/>
    </div>
    <div>
      <img src={shopify} alt='Tool'/>
    </div>
  </div>
);

export default Tools;
