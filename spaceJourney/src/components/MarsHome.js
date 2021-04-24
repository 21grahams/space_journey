import React from 'react';
import MarsPhotos from './MarsPhotos'

const MarsHome = props => {

  return (
    <div>
      {props.marsData.slice(0, 1).map((picture, i) => (
        <MarsPhotos picture={picture} key={i}/>
      ))}
    </div>
  )
}

export default MarsHome;