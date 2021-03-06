
// globals

// Enums
var X = 0, Y = 1, Z = 2, H = 3, P = 4;
var keyCodes = {
    a: 65,
    w: 87,
    s: 83,
    d: 68
}
// Enums para el tipo de cámara seleccionada
var FIRST = 0, THIRD = 1, LONGSHOT = 2;
// gl context
var gl;
// the canvas we're working with
var canvas;
// application var holder
var app = {};
app.cubeRotation = 0.0;
app.shaderProgram = {};
app.programInfo = {};
app.buffers = {};
app.texture = {};
app.modelViewMatrix = mat4.create();
app.projectionMatrix = mat4.create();
app.mvMatrixStack = [];
app.fieldOfView = 45 * Math.PI / 180;
app.zNear = 0.1;
app.zFar = 100.0;
app.deltaTime = 0;
app.then = 0;
app.walkspeed = 0.1;

app.sliders = {};

app.positions = {
    x : 0.0,
    z : -5.0
};

app.camera = {
    x : 2*Math.PI*30/180,
    y: 0,
    z: 0
};
app.ismousedown = false;
app.mousedown = {
    x: 0,
    y: 0
}
//función para dibujar la escena

app.drawScene;

