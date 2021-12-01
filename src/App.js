
import './App.css';
import React from 'react';
import {ReactVideo} from 'reactjs-media'
import image from "./imageInSrc.jpg"

function App() {
  return (
    <div className="App">
        <div style={{border:'solid 1px black', maxWidth:'100vw'}} >

              <h1 className="title red">Your name here</h1>

              < br /> 

              <img src={imageInSrc} className="image-fleur"alt="imgsrc" width='300px' />

              <br /> 

              <img src="/imageInPublic.jpg" alt="imgpublic" width= '300px' />

        </div>
        <div>
              <ReactVideo width="320" height="240" controls>

             <source src="/myVideo.mp4" type="video/mp4" />

            </ReactVideo>
        </div>
    </div>
  );
}

export default App;
