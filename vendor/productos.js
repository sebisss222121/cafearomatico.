

  document.addEventListener('DOMContentLoaded', function () {
        const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
        const carrito = document.querySelector('.carrito');
        const finalizarCompraButton = document.querySelector('.finalizar-compra');
        const totalCompra = document.querySelector('.total-compra');
        let total = 0.00;

        agregarCarritoButtons.forEach(button => {
          button.addEventListener('click', agregarAlCarrito);
        });

        carrito.addEventListener('click', gestionarCarrito);
        finalizarCompraButton.addEventListener('click', finalizarCompra);

        function agregarAlCarrito(event) {
          const nombreProducto = event.target.dataset.nombre;
          const precioProducto = parseFloat(event.target.dataset.precio);
          const productosEnCarrito = carrito.getElementsByClassName('producto-carrito');
          let existeProducto = false;

          for (let i = 0; i < productosEnCarrito.length; i++) {
            const producto = productosEnCarrito[i];
            if (producto.dataset.nombre === nombreProducto) {
              const cantidad = parseInt(producto.dataset.cantidad);
              producto.dataset.cantidad = cantidad + 1;
              producto.querySelector('.contador').textContent = cantidad + 1;
              existeProducto = true;
              break;
            }
          }

          if (!existeProducto) {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'producto-carrito');
            li.dataset.nombre = nombreProducto;
            li.dataset.cantidad = 1;
            li.dataset.precio = precioProducto;
            li.innerHTML = `
              ${nombreProducto}
              <div class="btn-group float-end" role="group">
                <button type="button" class="btn btn-danger btn-sm sacar-producto">-</button>
                <button type="button" class="btn btn-success btn-sm agregar-producto">+</button>
              </div>
              <span class="badge bg-primary rounded-pill contador">1</span>
            `;
            carrito.appendChild(li);
          }

          total += precioProducto;
          totalCompra.textContent = `Total: $${total.toFixed(2)}`;
        }

        function gestionarCarrito(event) {
          if (event.target.classList.contains('sacar-producto')) {
            const producto = event.target.closest('.producto-carrito');
            const cantidad = parseInt(producto.dataset.cantidad);
            const precioProducto = parseFloat(producto.dataset.precio);

            if (cantidad > 1) {
              producto.dataset.cantidad = cantidad - 1;
              producto.querySelector('.contador').textContent = cantidad - 1;
            } else {
              producto.remove();
            }

            total -= precioProducto;
            totalCompra.textContent = `Total: $${total.toFixed(2)}`;
          } else if (event.target.classList.contains('agregar-producto')) {
            const producto = event.target.closest('.producto-carrito');
            const cantidad = parseInt(producto.dataset.cantidad);
            const precioProducto = parseFloat(producto.dataset.precio);
            producto.dataset.cantidad = cantidad + 1;
            producto.querySelector('.contador').textContent = cantidad + 1;

            total += precioProducto;
            totalCompra.textContent = `Total: $${total.toFixed(2)}`;
          }
        }

        function finalizarCompra() {
          carrito.innerHTML = '';
          total = 0.00;
          totalCompra.textContent = `Total: $${total.toFixed(2)}`;
        }
      });



      