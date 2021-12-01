
import './App.css';
import React from 'react';
import imageInSrc from "./imageInSrc.jpg";
import './style.css';

function App() {
  return (
    <div className="App">
        <div style={{border:'solid 1px black', maxWidth:'100vw'}} >

              <h1 className="title red">Nada Kraiem</h1>

              < br /> 

              <img src={imageInSrc} className="image"alt="imgsrc" width='300px' />

              <br /> 

              <img src="/imageInPublic.jpg" alt="imgpublic" width= '300px' />

        </div>
        <div>
              <video width="320" height="240" controls>

             <source src="/myVideo.mp4" type="video/mp4" />

            </video>
        </div>
    </div>
  );
}

export default App;
