class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Llista dels productes que un usuari vol comprar.
 *
 * @class
 * @example
 * const carrito = new Carrito();
 * carrito.agregarProducto(new Producto("Mouse", 20, 2));
 * carrito.calcularTotalCarrito(); // 40
 */
class Carrito {
  /**
   * Crea un carret buit.
   */
  constructor() {
    /** @type {Producto[]} Productes que hi ha al carret. */
    this.productos = [];
  }

  /**
   * Afegeix un producte al final del carret.
   *
   * @param {Producto} producto - Producte que es vol afegir.
   * @returns {void}
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Suma l'import total de tots els productes del carret.
   *
   * @returns {number} Total del carret en euros (0 si està buit).
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Treu tots els productes del carret.
   *
   * @returns {void}
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
