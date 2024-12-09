import React, {useEffect, useRef, useState} from "react";
import {Canvas, Circle, Rect, Polygon} from "fabric";
import {IconButton} from "blocksin-system";
import {CircleIcon, ImageIcon, SquareIcon, StarIcon } from "sebikostudio-icons";

import Settings from "./Settings";
import { handleMovingObject, clearGuides } from "./SnappingHelper";


import './styles.scss';

function CanvasApp() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [guidelines, setGuidelines ] = useState([]);

  useEffect(()=>{
    if(canvasRef.current){
      const initCanvas = new Canvas(canvasRef.current, {
        width: 1100,
        height: 638
      })

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas); 

      initCanvas.on("object:moving", (event) =>{
        handleMovingObject(initCanvas, event.target, guidelines, setGuidelines)
      });
      initCanvas.on("object:modified", ()=>
        clearGuides(initCanvas,guidelines, setGuidelines)
      );
      return() =>{
        initCanvas.dispose();
      }
    }
  },[]);

  const addRectangle=()=>{
    if(canvas){
      const rect = new Rect({
        width: 100,
        top: 100,
        height:60,
        fill: "#D84d4",
        left:50
      });
      canvas.add(rect);
    }
  }
  const addCircle=()=>{
    if(canvas){
      const circle = new Circle({
        top:150, //top of the canvas
        width:150,
        radius:50,
        fill: "#FF0000"
      });
      canvas.add(circle);
    }
  }
  const addImage=(e)=>{

    if(canvas){

    }
     
     
    
  }
  function createStarPoints(centerX, centerY, spikes, outerRadius, innerRadius) {
    const points = [];
    const step = Math.PI / spikes;

    for (let i = 0; i < 2 * spikes; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = i * step;
        points.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
        });
    }

    return points;
  }
  //points to create star
  const centerX = 250;
  const centerY = 250;
  const spikes = 5;
  const outerRadius = 100;
  const innerRadius = 50;
  
  const starPoints = createStarPoints(centerX, centerY, spikes, outerRadius, innerRadius);
  const addStar =()=>{
    if(canvas){
      const star = new Polygon( starPoints, {
        top: 120,
        width:200,
        fill: "gold",
        strokeWidth:2,
        originX:'center',
        originY:'center'
      });
      canvas.add(star);
    }
  }
  const changeBackground=()=>{
     var canvas = new Canvas('c');
      var imgElement = document.getElementById('my-image');
      var imgInstance = new Image(imgElement, {
        left: 100,
        top: 100,
        angle: 30,
        opacity: 0.85
      });
      canvas.add(imgInstance);
  }

  return (
    <div className="App">
      <div className="Toolbar darkmode">
        {/* <p>Add a shape below</p> */}
        <IconButton onClick={addRectangle} variant="ghost" size="medium">
          <SquareIcon/>
        </IconButton>
        <IconButton onClick={addCircle} variant="ghost" size="medium">
          <CircleIcon/>
        </IconButton>
        <IconButton>
          <ImageIcon onClick={addImage()} variant="ghost" size="medium"/>
          <input type="file"
            accept="image/*"
            ref={canvasRef}
            style={{ display: 'none' }}
            onChange={addImage}/>
        </IconButton>
        <IconButton onClick={addStar} variant="ghost" size="medium">
          <StarIcon/>
        </IconButton>
      </div>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas}/>
    </div>
   
  );
}

export default CanvasApp;
