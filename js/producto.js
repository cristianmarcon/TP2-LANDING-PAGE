const seleccionado = JSON.parse(localStorage.getItem("productos"));
const mostrarInfo = document.querySelector("#detalle");

function convertirAEstrellas(estrellas) {
  const estrellasLlenas = estrellas.length;
  const estrellasVacias = 5 - estrellasLlenas;

  const estrellasHTML = '<span class="estrella-llena">★</span>'.repeat(estrellasLlenas) +
      '<span class="estrella-vacia">☆</span>'.repeat(estrellasVacias);

  return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
}

seleccionado.forEach((productoselecc) => {
    let contenido = document.createElement("div");
    contenido.innerHTML = `
    <div>
      <h3>${productoselecc.nombre}</h3>
      <img src="imagen/${productoselecc.imagen}">
      <p>${productoselecc.descripcion}</p>
      <p>$${productoselecc.valor}</p>
      <p>${convertirAEstrellas(productoselecc.estrellas)}</p>   
      </div>  
      `;
      mostrarInfo.append(contenido);
})