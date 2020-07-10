class Producto {
    constructor(nombre,precio,fecha ){
        this.nombre=nombre;
        this.precio=precio;
        this.fecha=fecha;
    }

}

class UserInterface{

    añadirProducto(producto){
        const ListadeProductos= document.getElementById("lista de productos");
        const Elemento = document.createElement("div");
        Elemento.innerHTML = `
        <div class= "card text-center mb-4">
             <div class= "card-body">
             <strong> Nombre del Producto  </strong>: ${producto.nombre}
             <br> <strong> Precio del Producto  </strong>: ${producto.precio}
             <br>  <strong> Fecha del Producto  </strong>: ${producto.fecha}
             <br> <a href="#" class="btn btn-danger" id="eliminar">Borrar </a>
             </div>
        </div>
        `;
        ListadeProductos.appendChild(Elemento);
    }

    resetearFormulario(){
document.getElementById("product-form").reset();

    }
    eliminarProducto(elemento){
        if (elemento.id ==="eliminar"){
             elemento.parentElement.parentElement.parentElement.remove();
        }

    }
    mostrarMensaje(mensajes, cssClass){
        const mensaje = document.createElement("div");
        mensaje.className = `alert alert-${cssClass} mt-4`;
        mensaje.appendChild(document.createTextNode(mensajes));
        const contenedor = document.querySelector(".container");
        const app = document.querySelector("#App");
        contenedor.insertBefore(mensaje,app);
        setTimeout(() => {
            document.querySelector (".alert").remove();
        }, 3000);

    }
}

// DOM
document.getElementById("product-form")
.addEventListener("submit",function(e){
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const fecha = document.getElementById("fecha").value;
    
    console.log(nombre,precio,fecha);
    const producto = (new Producto(nombre,precio,fecha));
    const ui = new UserInterface();
    if (nombre==="" || precio==="" || fecha===""){
        ui.mostrarMensaje("Faltan campos por llenar", "info");
    }
    else {
        ui.añadirProducto(producto);
        ui.resetearFormulario();
        ui.mostrarMensaje("Se agrego correctamente", "success");
    }
   




    document.getElementById("eliminar").addEventListener("click",function(e){
        const ui = new UserInterface();
        ui.eliminarProducto(e.target);
        ui.mostrarMensaje("Eliminado ","danger");
    
    
    })
    
    e.preventDefault();
 
});