
class Producto {
    constructor(nombre, precio, fecha) {
        this.nombre = nombre;
        this.precio = precio;
        this.fecha = fecha;
    }

}

class UserInterface {

    constructor() {
        this.contador = 0;
    }


    añadirProducto(producto) {
        const ListadeProductos = document.getElementById("listaProductos");
        const Elemento = document.createElement("div");
        Elemento.setAttribute("class", "card text-center mb-4");
        Elemento.setAttribute("id", "prod_" + this.contador);
        Elemento.innerHTML = `
             <div class= "card-body">
             <strong> Nombre del Producto  </strong>: ${producto.nombre}
             <br> <strong> Precio del Producto  </strong>: ${producto.precio}
             <br>  <strong> Fecha del Producto  </strong>: ${producto.fecha}
             <br> <a href="#" class="btn btn-danger" onclick="eliminarProducto('prod_${this.contador}')">Borrar </a>
             </div>
        `;
        ListadeProductos.appendChild(Elemento);
        this.contador++;

    }

    resetearFormulario() {
        document.getElementById("product-form").reset();

    }
    eliminarProducto(id) {
        const e = document.getElementById(id);
        e.remove();
    }

    mostrarMensaje(mensajes, cssClass) {
        const mensaje = document.createElement("div");
        mensaje.className = `alert alert-${cssClass} mt-4`;
        mensaje.appendChild(document.createTextNode(mensajes));
        const contenedor = document.querySelector(".container");
        const app = document.querySelector("#App");
        contenedor.insertBefore(mensaje, app);
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);

    }
}

const ui = new UserInterface();

// DOM
document.getElementById("product-form")
    .addEventListener("submit", function (e) {
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const fecha = document.getElementById("fecha").value;

        console.log(nombre, precio, fecha);
        const producto = (new Producto(nombre, precio, fecha));

        if (nombre === "" || precio === "" || fecha === "") {
            ui.mostrarMensaje("Faltan campos por llenar", "info");
        }
        else {
            ui.añadirProducto(producto);
            ui.resetearFormulario();
            ui.mostrarMensaje("Se agrego correctamente", "success");
        }

        e.preventDefault();

    });

function eliminarProducto(idProducto) {
    ui.eliminarProducto(idProducto);
}