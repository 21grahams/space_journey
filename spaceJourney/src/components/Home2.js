import React from 'react';
import MarsPhotos from './MarsPhotos'

const Home2 = props => {

  return (
    <div>
      {props.marsData.map((picture, i) => (
        <MarsPhotos picture={picture} key={i}/>
      ))}
    </div>
  )
}

export default Home2;