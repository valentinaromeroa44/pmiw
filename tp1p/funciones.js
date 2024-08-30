// Función para dibujar los cuadrados
void cuadradodegrade(int x, int y) {
  fill(255);
  stroke(1);
  square(x, y, tamanoCuadrado);

  // Cambio de colores y degradado
  if (espar(contador)) {
    for (int i = 0; i < tamanoCuadrado; i++) {
      stroke(max(0, verde - i * 5), max(0, azul - i * 5), max(0, rojo - i * 5));
      line(x + i, y, x + i, y + tamanoCuadrado - 1);
    }
  } else {
    for (int i = 0; i < tamanoCuadrado; i++) {
      stroke(max(0, verde - i * 2), max(0, azul - i * 2), max(0, rojo - i * 2));
      line(x + tamanoCuadrado - 1 - i, y, x + tamanoCuadrado - 1 - i, y + tamanoCuadrado - 1);
    }
  }
}


boolean espar(int n) {
  return n % 2 == 0;
}

// Cambia los colores al presionar el mouse
void mousePressed() {
  colores();
}

// Función que cambia los colores aleatoriamente
void colores() {
  if (rojo == 255) {
    rojo = int(random(150, 255));
    verde = 255;
  } else if (verde == 255) {
    verde = int(random(200, 255));
    azul = 255;
  } else if (azul == 255) {
    azul = int(random(200, 255));
    rojo = 255;
  }
}

// Función para dibujar los cuadrados en filas
void filas() {
  posy = 0;
  contador = 0;
  for (int k = 0; k < 10; k++) {
    for (int j = 0; j < 10; j++) {
      cuadradodegrade(posx + j * 40, posy);
    }
    contador++;
    posy = posy + 40;
  }
}

// Cambia el tamaño de la ventana cuando el mouse se mueve
void mouseMoved() {
  tamanoCuadrado = int(map(mouseX, 0, width, 20, 120));
}

// Reinicia los valores al mover el círculo
void reiniciar() {
  fill(0);
  circle(30, 370, 50);
  fill(255);
  float d1 = dist(mouseX, mouseY, 0, 270);
  int r1 = 10 / 2;

  if (d1 < r1) {
    azul = 150;
    rojo = 0;
    verde = 0;

    posx = 400;
    posy = 0;
  }
}
