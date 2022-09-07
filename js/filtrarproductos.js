for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')) {
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria');
        filtrarProductosPorCatergoria(categoria)
    }
    console.log(nodoHTML.innerHTML);
}

function filtrarProductosPorCatergoria(categoria) {
    document.getElementById("cards-nuevas").innerHTML = productos;
    const productosFiltrados = productos.filter((producto) => producto.categoria === categoria);
    console.log(productosFiltrados)
    productosFiltrados.forEach((producto) => {
        function generarCardsHTML(arrayARecorrer) {
            let acumulador = ``;
            arrayARecorrer.forEach((producto) => {
                acumulador += `
                  <div class="card h-100 mb-3">
                  <!-- Imagen del producto -->
                  <img class="card-img-top mt-5" src="${producto.imagen}" alt="..." />
                  <!-- Detalles del producto -->
                  <div class="card-body p-3">
                      <div class="text-center">
                          <!-- Nombre del procuto -->
                          <h5 class="fw-bolder">${producto.nombre}</h5>
                          <!-- Precio del producto-->
                          $ ${producto.precio}
                      </div>
                  </div>
                  <!-- Acciones en el proucto -->
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div class="text-center">
                      <a 
                      onclick="agregarAlCarrito(${producto.id})"
                      class="btn btn btn-primary mt-auto" href="#">
                      Agregar al carrito
                      </a>
                      </div>
                      </div>
                  </div>
              </div>`;
            });
            agregarCardsEnHTML(acumulador);
        }



    });
}


function agregarCardsEnHTML(cards) {
    document.getElementById("cards-nuevas").innerHTML = cards;
}