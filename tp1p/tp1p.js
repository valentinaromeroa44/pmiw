// https://www.youtube.com/watch?v=OtIkT8DjDj8
//Valentina Romero

PImage degradado;
int azul, verde, rojo;
int posx, posy;
int contador;
int tamanoCuadrado = 80; // Tamaño inicial del cuadrado


function setup() {
  size(800, 400);
  degradado = loadImage("degradado.JPG");

  // Colores iniciales 
  azul = 255;
  rojo = 0;
  verde = 0;

  posx = 400;
  posy = 0;
  
}


function draw() {
 background(200);
  image(degradado, 5, 0, 390, 620);


  filas();
  reiniciar();

}
