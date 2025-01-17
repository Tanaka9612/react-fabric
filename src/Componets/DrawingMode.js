// import React, { useEffect, useRef } from 'react';
// // import {  } from '';

// const DrawingCanvas = () => {
//   const canvasRef = useRef(null);
//   const CanvasRef = useRef(null);

//   useEffect(() => {
//     const canvasEl = canvasRef.current;
//     const canvas = new Canvas(canvasEl, {
//       isDrawingMode: true,
//     });

//     CanvasRef.current = canvas;

//     canvas.freeDrawingBrush = new .PencilBrush(canvas);
//     .Object.prototype.transparentCorners = false;

//     const clearCanvas = () => {
//       canvas.clear();
//     };

//     const toggleDrawingMode = () => {
//       canvas.isDrawingMode = !canvas.isDrawingMode;
//       const button = document.getElementById('drawing-mode');
//       button.innerHTML = canvas.isDrawingMode ? 'Cancel drawing mode' : 'Enter drawing mode';
//     };

//     const setupPatternBrushes = () => {
//       if (PatternBrush) {
//         const vLinePatternBrush = new PatternBrush(canvas);
//         vLinePatternBrush.getPatternSrc = function () {
//           const patternCanvas = document.createElement('canvas');
//           patternCanvas.width = patternCanvas.height = 10;
//           const ctx = patternCanvas.getContext('2d');
//           ctx.strokeStyle = this.color;
//           ctx.lineWidth = 5;
//           ctx.beginPath();
//           ctx.moveTo(0, 5);
//           ctx.lineTo(10, 5);
//           ctx.closePath();
//           ctx.stroke();
//           return patternCanvas;
//         };

//         const hLinePatternBrush = new PatternBrush(canvas);
//         hLinePatternBrush.getPatternSrc = function () {
//           const patternCanvas = document.createElement('canvas');
//           patternCanvas.width = patternCanvas.height = 10;
//           const ctx = patternCanvas.getContext('2d');
//           ctx.strokeStyle = this.color;
//           ctx.lineWidth = 5;
//           ctx.beginPath();
//           ctx.moveTo(5, 0);
//           ctx.lineTo(5, 10);
//           ctx.closePath();
//           ctx.stroke();
//           return patternCanvas;
//         };

//         const squarePatternBrush = new PatternBrush(canvas);
//         squarePatternBrush.getPatternSrc = function () {
//           const squareWidth = 10,
//             squareDistance = 2;
//           const patternCanvas = document.createElement('canvas');
//           patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
//           const ctx = patternCanvas.getContext('2d');
//           ctx.fillStyle = this.color;
//           ctx.fillRect(0, 0, squareWidth, squareWidth);
//           return patternCanvas;
//         };

//         const diamondPatternBrush = new PatternBrush(canvas);
//         diamondPatternBrush.getPatternSrc = function () {
//           const squareWidth = 10,
//             squareDistance = 5;
//           const patternCanvas = document.createElement('canvas');
//           const rect = new .Rect({
//             width: squareWidth,
//             height: squareWidth,
//             angle: 45,
//             fill: this.color,
//           });

//           const canvasWidth = rect.getBoundingRect().width;
//           patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
//           rect.set({
//             left: canvasWidth / 2,
//             top: canvasWidth / 2,
//           });

//           const ctx = patternCanvas.getContext('2d');
//           rect.render(ctx);
//           return patternCanvas;
//         };

//         const texturePatternBrush = new PatternBrush(canvas);
//         const img = new Image();
//         img.src = '/path-to-your-image.png'; // Update with your image path
//         texturePatternBrush.source = img;

//         return {
//           vLine: vLinePatternBrush,
//           hLine: hLinePatternBrush,
//           square: squarePatternBrush,
//           diamond: diamondPatternBrush,
//           texture: texturePatternBrush,
//         };
//       }
//       return null;
//     };

//     const patternBrushes = setupPatternBrushes();

//     const updateBrushSettings = (event) => {
//       const { value, id } = event.target;
//       const brush = canvas.freeDrawingBrush;
//       if (!brush) return;

//       if (id === 'drawing-color') {
//         brush.color = value;
//       } else if (id === 'drawing-line-width') {
//         brush.width = parseInt(value, 10) || 1;
//       } else if (id === 'drawing-shadow-color') {
//         brush.shadow.color = value;
//       } else if (id === 'drawing-shadow-width') {
//         brush.shadow.blur = parseInt(value, 10) || 0;
//       } else if (id === 'drawing-shadow-offset') {
//         brush.shadow.offsetX = parseInt(value, 10) || 0;
//         brush.shadow.offsetY = parseInt(value, 10) || 0;
//       }
//     };

//     document.getElementById('clear-canvas').onclick = clearCanvas;
//     document.getElementById('drawing-mode').onclick = toggleDrawingMode;
//     document.querySelectorAll('.drawing-control').forEach((control) => {
//       control.onchange = updateBrushSettings;
//     });

//     return () => {
//       canvas.dispose();
//     };
//   }, []);

//   return (
//       <div>
//         <button id="drawing-mode">Enter drawing mode</button>
//         <button id="clear-canvas">Clear Canvas</button>
//         <input id="drawing-color" type="color" className="drawing-control" defaultValue="#000000" />
//         <input id="drawing-line-width" type="number" className="drawing-control" defaultValue="1" />
//         <input id="drawing-shadow-color" type="color" className="drawing-control" defaultValue="#000000" />
//         <input id="drawing-shadow-width" type="number" className="drawing-control" defaultValue="0" />
//         <input id="drawing-shadow-offset" type="number" className="drawing-control" defaultValue="0" />
//       </div>
//   );
// };

// export default DrawingCanvas;
