
//  </>
const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
console.log(carritoStorage);
const carrito = carritoStorage;
    //actualizando el html
    document.getElementById("cantidad-prod").innerHTML = "$"+ productoAgregado.precio * productoAgregado.cantidad;

const productos = [
    { id: 1, titulo: "Zapatillas nike", precio: 10000, sotck: 4, imagen:'https://sporting.vteximg.com.br/arquivos/ids/463079-1000-1000/4CU4870-001-1.jpg?v=637792542277530000'},
    { id: 2, titulo: "Zapatillas adidas", precio: 12000, sotck: 3, imagen:'https://sporting.vteximg.com.br/arquivos/ids/427634-1000-1000/6FX3603-000-1.jpg?v=637740551876100000'},
    { id: 3, titulo: "Zapatillas Salomon", precio: 9000, sotck: 2, imagen:'https://sporting.vteximg.com.br/arquivos/ids/356131-1000-1000/1773325-000-1.jpg?v=637659181552500000'},
    { id: 4, titulo: "Zapatillas underarmour", precio: 14000, sotck: 0, imagen:'https://sporting.vteximg.com.br/arquivos/ids/466231-1000-1000/UAC0126-001-1.jpg?v=637799164231170000'},
    { id: 5, titulo: "Zapatillas asics", precio: 15000, sotck: 0, imagen:'https://sporting.vteximg.com.br/arquivos/ids/502131-1500-1500/1011B405-003-1.jpg?v=637847662013870000'},
];

const agregarAlCarrito = (idProducto) => {
    const valorDeCantidad = document.getElementById(`cantidad-${idProducto}`).value;
    console.log(valorDeCantidad);

    const productoAgregado = productos.find(producto => producto.id === idProducto)
    productoAgregado.cantidad = valorDeCantidad;

    //agregando al carrito
    carrito.push(productoAgregado);

    //actualizar storage del carrito
    localStorage.setItem("carrito",JSON.stringify(carrito));

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
    porductosAMostrar.forEach(elementoDelArray) => {

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

