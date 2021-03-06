import React from 'react';

import Smurf from './Smurf.js';

const SmurfVillage = props => {
  return (
    <div style={{display:'flex',flexFlow:'wrap'}}>
      {props.smurfs.map((smurf,index) => {
        return <Smurf index={index} key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfVillage;
