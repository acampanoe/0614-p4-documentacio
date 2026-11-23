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

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  vaciarCarrito() {
    this.productos = [];
  }
}

/**
 * Una persona que fa compres. Cada usuari té el seu propi carret.
 *
 * @class
 * @example
 * const usuari = new Usuario("Juan", "juan@example.com");
 * usuari.agregarProductoAlCarrito(new Producto("Mouse", 20, 2));
 * usuari.finalizarCompra(); // "Usuario Juan ha realizado una compra por un total de 40€"
 */
class Usuario {
  /**
   * Crea un usuari amb un carret buit.
   *
   * @param {string} nombre - Nom de l'usuari.
   * @param {string} correo - Adreça de correu electrònic de l'usuari.
   */
  constructor(nombre, correo) {
    /** @type {string} Nom de l'usuari. */
    this.nombre = nombre;
    /** @type {string} Correu electrònic de l'usuari. */
    this.correo = correo;
    /** @type {Carrito} Carret propi de l'usuari. */
    this.carrito = new Carrito();
  }

  /**
   * Afegeix un producte al carret de l'usuari.
   *
   * @param {Producto} producto - Producte que es vol afegir.
   * @returns {void}
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finalitza la compra: calcula el total del carret, el mostra per consola
   * i buida el carret.
   *
   * @returns {void}
   */
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
