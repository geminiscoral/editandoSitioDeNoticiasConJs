var noticias = obtenerNoticias();

// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra) {
  var noticiaActual;
  for (var i = 0; i < noticias.length; i++) {
    noticiaActual = noticias[i];
    if (contienePalabra(noticiaActual, palabra)) {
      ocultarNoticia(noticiaActual);
    }
  }
}

function recortarNoticias(cantidadPalabras) {
  var noticiaActual;
  for (var i = 0; i < noticias.length; i++) {
    noticiaActual = noticias[i];
    recortarTexto(noticiaActual, cantidadPalabras);
  }
}

function resaltarNoticiasQueContengan(palabra, color) {
  var noticiaActual;
  for (var i = 0; i < noticias.length; i++) {
    noticiaActual = noticias[i];
    if(contienePalabra(noticiaActual, palabra)){
      cambiarColor(noticiaActual, color);
    }
  }
}

ocultarNoticiasQueContengan("Google");
recortarNoticias(20);
resaltarNoticiasQueContengan("ARGENTINA",'#AAB7B8');
resaltarNoticiasQueContengan("robots", '#D68910');
