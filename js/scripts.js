
//  </>
const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoStorage);
const carrito = carritoStorage;
    //actualizando el html
    document.getElementById("cantidad-prod").innerHTML = "$"+ productoAgregado.precio * productoAgregado.cantidad;

fetch("/sitio.json")
.then((response) => response.json())
.then((data) => generarCardsHTML(data.productos))

const agregarAlCarrito = (idProducto) => {
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value;
    console.log(valorDeCantidad);

    const productoAgregado = productos.find(producto => producto.id === idProducto)
    productoAgregado.cantidad = valorDeCantidad;

    //agregando al carrito
    carrito.push(productoAgregado);

    //actualizar storage del carrito
    localStorage.setItem("carrito",JSON.stringify(carrito));

    swal({
        title: `Agregaste ${productoAgregado.titulo} a tu carrito`,
        text: "Ya sos uno mas de La Cancha!",
        icon: "success",
        button: "Continuar comprando",
      });
};

generarCards(productos);

const totalDelCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0 );
console.log("total del carrito:" + totalDelCarrito);

const nuevoListadoProductos = productos.map((producto) => {
if(producto.stock === 0){
    producto.stock = "No hay Stock";
}
return producto;
})

console.log(nuevoListadoProductos)

//codigo para filtrar por precio

const productosDeMayorPrecio = productos.filter((producto) => producto.precio > 10000);
console.log(productosDeMayorPrecio);
generarCards(productosDeMayorPrecio);


function generarCards(porductosAMostrar){
    let acumuladorDeCards = ``;
    porductosAMostrar.forEach((elementoDelArray)); {

    acumuladorDeCards += `<div class="card h-100">
    <!-- Sale badge-->
    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
    ${elementoDelArray.stock > 0 ? 'esta en venta' : 'Out of stock'}
    </div>
    <!-- Product image-->
    <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
    <!-- Product details-->
    <div class="card-body p-4">
        <div class="text-center">
            <!-- Product name-->
            <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
            <!-- Product price-->
            <span class="text-muted text-decoration-line-through">$20.00</span>
            <input value= 1 id="cantidad-${elementoDelArray.id}" type="number" placeholder="cantidad">
            $${elementoDelArray.precio}
        </div>
    </div>
    <!-- Product actions-->
    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
        <button onclick="agregarAlCarrito(${elementoDelArray.id})"
        class="btn btn-outline-dark mt-auto" href="#">
        Add to cart 
        </button>
        </div>
    </div>
</div>`;
};

mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
document.getElementById("listado-productos").innerHTML = cards;
};

function suscribirseAlEmail() {
   const email = document.getElementById("email").value;
   console.log(email)
}

function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUppercase().trim();
    console.log(nombreProductoBuscado);

const productosEncontrados = porductos.filter((producto) => {
    return producto.title.toUppercase().match(nombreProductoBuscado);
 });
generarCards(productosEncontrados);
}

