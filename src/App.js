import React, {useEffect, useRef, useState} from "react";
import {Canvas, Circle, Rect} from "fabric";
import {IconButton} from "blocksin-system";
import {CircleIcon, ImageIcon, SquareIcon } from "sebikostudio-icons";

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
  }, []);

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
      let img = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload=()=>{
        let imgUrl =reader.result;
        let imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.onload=function(){
          let image = new Image(imgElement);
          canvas.add(image);
          canvas.centerObject(image);
          canvas.setActiveObject(image);

        }
      }
      canvas.add(img); 
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
      </div>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Settings canvas={canvas}/>
    </div>
   
  );
}

export default CanvasApp;
