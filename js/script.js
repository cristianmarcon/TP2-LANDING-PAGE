const seleccionCafe = document.querySelector("#seleccionCafe");
let productos;

const loadTask = async () => {
    localStorage.clear();
    seleccionCafe.innerHTML = "";

    productos = localStorage.getItem("productos");

    if (productos == null) {
        const response = await fetch("json/productos.json");

        productos = await response.json();

        localStorage.setItem("productos", JSON.stringify(productos));

    }

    if (typeof productos == "string") {
        productos = JSON.parse(productos);
    }

    productos.forEach(createTask);

};

const createTask = (productos) => {
    const productosHTML = `
        <div class="card">
            <h2 data-id="${productos.id}">${productos.nombre}</h2>
            <img src="imagen/${productos.imagen}" alt="">
            <button id="btn${productos.id}">Detalle</button>
        </div> `;
seleccionCafe.innerHTML += productosHTML;

};

loadTask();

document.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
console.log (event.target.dataset.id);
localStorage.setItem("id", event.target.dataset.id);
window.location = "productos.html";      
    }
}
)
