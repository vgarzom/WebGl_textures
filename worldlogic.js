
function drawWorld() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;

  app.projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  app.fieldOfView = 45 * Math.PI / 180;
  app.zNear = 0.1;
  app.zFar = 100.0;
  mat4.perspective(app.projectionMatrix,
    app.fieldOfView,
    aspect,
    app.zNear,
    app.zFar);



  // Now move the drawing position a bit to where we want to
  // start drawing the square.
  mat4.rotate(app.projectionMatrix,  // destination matrix
    app.projectionMatrix,  // matrix to rotate
    app.camera.x,     // amount to rotate in radians
    [1, 0, 0]);       // axis to rotate around (X)

  
  mat4.translate(app.projectionMatrix,     // destination matrix
    app.projectionMatrix,     // matrix to translate
    [app.positions.x, -5.5, app.positions.z]);  // amount to translate
  
   

    


  app.modelViewMatrix = mat4.create();

  mvPushMatrix()
  mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-0.0, 2, -5.0]);  // amount to translate
  mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [3, 3, 0.02]);
  drawElement(app.buffers.cube, app.texture.bricks);
  mvPopMatrix();

  mvPushMatrix()
  mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-0.0, -1, 0.0]);  // amount to translate
  mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [3, 0.02, 5]);
  drawElement(app.buffers.cube, app.texture.wood);
  mvPopMatrix();


  mvPushMatrix()

  mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-0.0, 3, -4.8]);  // amount to translate
  //mat4.rotate(app.modelViewMatrix, app.modelViewMatrix, Math.PI, [0, 0, 1]);
  mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [2, 1, 0.02]);

  drawElement(app.buffers.cube, app.texture.hersheys);
  mvPopMatrix();


  mvPushMatrix()
  mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-0.0, -0.3, 1.0]);  // amount to translate
  mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [0.3, 1.5, 0.3]);
  drawElement(app.buffers.cyl, app.texture.metal);
  mvPopMatrix();

  mvPushMatrix()
  mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-0.0, 0.4, 1.0]);  // amount to translate
  mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [1.5, 0.05, 1.5]);
  drawElement(app.buffers.cyl, app.texture.metal);
  mvPopMatrix();

  mvPushMatrix()
    mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-0.0, 0.9, 1.0]);  // amount to translate
    mat4.rotate(app.modelViewMatrix,  // destination matrix
      app.modelViewMatrix,  // matrix to rotate
      app.cubeRotation,     // amount to rotate in radians
      [1, 0, 1]);       // axis to rotate around (Z)
    mat4.rotate(app.modelViewMatrix,  // destination matrix
      app.modelViewMatrix,  // matrix to rotate
      app.cubeRotation * .7,// amount to rotate in radians
      [0, 1, 0]);       // axis to rotate around (X)
    mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [0.3, 0.6, 0.3]);
    drawElement(app.buffers.cyl, app.texture.coke);
  mvPopMatrix();

  mvPushMatrix()
    mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [-1.0, 0.4*Math.sin(2*app.cubeRotation), 2.0]);  // amount to translate
    mat4.rotate(app.modelViewMatrix,  // destination matrix
      app.modelViewMatrix,  // matrix to rotate
      app.cubeRotation,     // amount to rotate in radians
      [1, 1, 1]);       // axis to rotate around (Z)
      mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [0.3, 0.3, 0.3]);
    drawElement(app.buffers.sphere, app.texture.baseball);
  mvPopMatrix();

  mvPushMatrix()
    mat4.translate(app.modelViewMatrix, app.modelViewMatrix, [1.0, 0.5*Math.sin(3*app.cubeRotation + 1), 4.0]);  // amount to translate
    mat4.rotate(app.modelViewMatrix,  // destination matrix
      app.modelViewMatrix,  // matrix to rotate
      app.cubeRotation,     // amount to rotate in radians
      [1, 1, 1]);       // axis to rotate around (Z)
      mat4.scale(app.modelViewMatrix, app.modelViewMatrix, [0.3, 0.3, 0.3]);
    drawElement(app.buffers.sphere, app.texture.tennis);
  mvPopMatrix();







  /*
  mat4.rotate(app.modelViewMatrix,  // destination matrix
              app.modelViewMatrix,  // matrix to rotate
              app.cubeRotation,     // amount to rotate in radians
              [1, 0, 1]);       // axis to rotate around (Z)
  mat4.rotate(app.modelViewMatrix,  // destination matrix
              app.modelViewMatrix,  // matrix to rotate
              app.cubeRotation * .7,// amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around (X)
              */
  //drawElement(app.buffers.sphere);
  // Update the rotation for the next draw

  app.cubeRotation += app.deltaTime;
}

app.drawScene = drawWorld;
