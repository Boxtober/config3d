import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Editor() {
  
  // Créer une référence pour le canvas et les états pour le déplacement de l'image
  const myCanvas = useRef();
  const [canvasImage, setCanvasImage] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  // Dessine l'image initiale sur le canvas et stocke l'image dans l'état du canvas
  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src = "./src/assets/react.svg";

    image.onload = () => {
      const width = image.width * 2;
      const height = image.height * 3;
      const x = (myCanvas.current.width - width) / 2;
      const y = (myCanvas.current.height - height) / 2;
      context.drawImage(image, x, y, width, height);
      setCanvasImage(myCanvas.current.toDataURL());
    };
  }, []);

  // Evenement au clic sur le canvas
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragOffset({
      x: event.clientX - imagePosition.x,
      y: event.clientY - imagePosition.y,
    });
  };

  // Mouvement de la souris sur le canvas
  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const x = event.clientX - dragOffset.x;
    const y = event.clientY - dragOffset.y;
    setImagePosition({ x, y });

    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src = canvasImage;

    image.onload = () => {
      context.clearRect(0, 0, myCanvas.current.width, myCanvas.current.height);
      context.drawImage(
        image,
        x,
        y,
        myCanvas.current.width,
        myCanvas.current.height
      );
      const texture = new THREE.CanvasTexture(myCanvas.current);
      texture.needsUpdate = true;
    };
  };

  // Relachement du clic sur le canvas
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Rendu du composant
  return (
    <>
      <canvas
        id="myCanvas"
        ref={myCanvas}
        style={{
          
          marginBottom: "50px",
          width: "800px",
          backgroundColor: "burlywood",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </>
  );
}


/*import { useEffect, useRef, useState } from "react";
import { React } from 'react';

export default function Editor() {
  const myCanvas = useRef();
  const [canvasImage, setCanvasImage] = useState('');
  
  
  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image();
    image.src = "./src/assets/wow.png"; 
    
    const posX = 0;
    const posY = 0;
    
    image.onload = () => {
      
      context.drawImage(image, posX, posY, 250, 450);
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
      setCanvasImage(myCanvas.current.toDataURL());
    };

  }, []);
  
  return (
    <>
      <canvas 
        id="myCanvas"
        ref={myCanvas} 
        width={1025}
        height={508}
        style={{
          border: '1px solid black',
          marginBottom: '50px',
          width: '800px',
          backgroundColor: 'burlywood'
        }}
      />
      </>
      );
      } 

*/

/*
import { useEffect, useRef } from "react";
import React from 'react';

export default function Editor() {
  const myCanvas = useRef();
  
  useEffect(() => {
  const canvas = myCanvas.current;
  const ctx = canvas.getContext('2d');
  
  function drawSquare(x, y, size, color) {
    if (x < 0) {
      x += canvas.width;
    }
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  }
  function drawLine(x, y, length, colors, squareSize) {
    for (let i = 0; i < length; i++) {
      drawSquare(x + i * squareSize, y, squareSize, colors[i % colors.length]);
    }
  }
  function drawCheck(x, y, gridSize, colors, squareSize) {
    for (let i = 0; i < gridSize; i++) {
      let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
      drawLine(x, y + squareSize * i, gridSize, currColors, squareSize);
    }
  }
  let x = 100;
  let duration = 2000;
  let speed = 20;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCheck(x - canvas.width, 11, 15, ['green','white', 'black'], 15);
    
    x += speed;
    x = x % canvas.width; 

    setTimeout(animate, duration / speed );
    }
    animate();


    
  }, []);

  return (
    <canvas 
      id="myCanvas"
      ref={myCanvas}  
      className="editorCanvas"  
      width={1025} // taille img
      height={508}
      style={{

        marginRight: '50px',
        backgroundColor: 'burlywood',
        width: 800,
        height: 300
      }}
    />
  );
}  
*/

/*   V E R S I O N    I N I T I A L

import { useEffect, useRef, useState } from "react";
import React from 'react';

export default function Editor() {
  const myCanvas = useRef(null);
  useEffect(() => {
  const canvas = myCanvas.current;
  const ctx = canvas.getContext('2d');

  function drawSquare(x, y, size, color) {
    if (x < 0) {
      x += canvas.width;
    }
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  }
  function drawLine(x, y, length, colors, squareSize) {
    for (let i = 0; i < length; i++) {
      drawSquare(x + i * squareSize, y, squareSize, colors[i % colors.length]);
    }
  }
  function drawCheck(x, y, gridSize, colors, squareSize) {
    for (let i = 0; i < gridSize; i++) {
      let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
      drawLine(x, y + squareSize * i, gridSize, currColors, squareSize);
    }
  }
  let x = 100;
  let duration = 2000;
  let speed = 20;
  function animate() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCheck(x - canvas.width, 11, 15, ['green','white', 'black'], 15);
    
    x += speed;
    x = x % canvas.width; 

    setTimeout(animate, duration / speed );
    }
    animate();
  }, []);

  return (
    <canvas 
      id="myCanvas"
      ref={myCanvas}  
      className="editorCanvas"  
      width={1025} // taille img
      height={508}
      style={{
        border: '1px solid black',
        marginRight: '50px',
        backgroundColor: 'burlywood',
        width: 600,
        height: 300
      }}

      onLoad={() => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext('2d');
        
        let x = 100;
        let duration = 2000;
        let speed = 20;
  
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawCheck(x - canvas.width, 11, 15, ['green','white', 'black'], 15);
          x += speed;
          x = x % canvas.width; 
          setTimeout(animate, duration / speed );
        }

        animate();
      }}
    />
  );
}  

*/


/* 
import { useEffect, useRef, useState } from "react";
import React from 'react';
import { Suspense } from 'react';
import Draggable from "./Draggable";

export default function Editor() {
  
  const myCanvas = useRef();
  const [canvasImage, setCanvasImage] = useState('');
  
  useEffect(() => {
    const context = myCanvas.current.getContext("2d");
    const image = new Image(); 
    image.src = "./src/assets/gloss.jpg"; 
   
    const posX = 0;
    const posY = 0;

    image.onload = () => {
      context.drawImage(image, posX, posY, 250, 250);
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
      setCanvasImage(myCanvas.current.toDataURL());

      console.log(image)
    };
  });
  
  return (
  
      <canvas 
      ref={myCanvas}  
      className="editorCanvas"  
      width={1025} // taille img
      height={508}
        style={{
          border: '1px solid black',
          marginRight: '50px',
          backgroundColor: 'burlywood',
          width: 600,
          height: 300
        }}
      />
  );
} 
*/

/* -------- DAMIER REACT 
import { useEffect, useRef } from "react";
import React from 'react';

export default function Editor() {
const canvasRef = useRef(null);

useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext('2d');


function drawSquare(x, y, size, color) {
  if (x < 0) {
    x += canvas.width;
  }
  ctx.fillStyle = color;
  ctx.fillRect(x, y, size, size);
}

//drawSquare(11, 11, 44, 'red');
//}, []);
function drawLine(x, y, length, colors, squareSize) {
  for (let i = 0; i < length; i++) {
    drawSquare(x + i * squareSize, y, squareSize, colors[i % colors.length]);
  }
}
function drawCheck(x, y, gridSize, colors, squareSize) {
  for (let i = 0; i < gridSize; i++) {
    let currColors = [...colors.slice(i%colors.length, colors.length), ...colors.slice(0, i%colors.length)]; 
    drawLine(x, y + squareSize * i, gridSize, currColors, squareSize);
  }
}
  //drawCheck(11, 11, 11, ['red', 'blue', 'green'], 11);
  //}, []);

let x = 100;
let duration = 2000;
let speed = 20;

function animate() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCheck(x - canvas.width, 11, 15, ['green','white', 'black'], 15);
  
  x += speed;
  x = x % canvas.width; 

  setTimeout(animate, duration / speed );
  }
 
  animate();
 }, []);

  return (
    <canvas ref={canvasRef} />
  );
}
*/
