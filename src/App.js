import React from 'react';
import Canvas from './Canvas';
import './App.css';

function App() {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  } 

  return (
    <div className="App">
      <section className="App-section">


        <Canvas draw={draw} />
      </section>
    </div>
  );
}

export default App;
