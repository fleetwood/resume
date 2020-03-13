import React from 'react';
import {Section, config} from './Section';

const item = (item) => (
    <div className="m-3 p-3 col-sm-5 col-md-3 border rounded interest-item">
        <h5>{item.title}</h5>
        <p>{item.description}</p>
        <div className="item-bg w-100 h-100" style={{backgroundImage:`url(./../img/${item.image})`}}></div>
    </div>
);

const Interests = ( 
    <div className="w-100 d-flex align-items-start align-content-stretch flex-wrap">
        {config.Interests.interests.map(interest => item(interest))}
    </div>
)

export default (<Section title={config.Interests.title} titleClass='interests' content={Interests} />);
