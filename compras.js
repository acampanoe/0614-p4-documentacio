/**
 * Un article de la botiga, amb el seu preu i la quantitat que es vol comprar.
 *
 * @class
 * @example
 * const portatil = new Producto("Laptop", 1200, 1);
 * portatil.calcularTotal(); // 1200
 */
class Producto {
  /**
   * Crea un producte.
   *
   * @param {string} nombre - Nom del producte.
   * @param {number} precio - Preu d'una unitat, en euros.
   * @param {number} cantidad - Nombre d'unitats que es volen comprar.
   */
  constructor(nombre, precio, cantidad) {
    /** @type {string} Nom del producte. */
    this.nombre = nombre;
    /** @type {number} Preu d'una unitat, en euros. */
    this.precio = precio;
    /** @type {number} Nombre d'unitats. */
    this.cantidad = cantidad;
  }

  /**
   * Calcula l'import total d'aquest producte (preu per quantitat).
   *
   * @returns {number} Import total en euros.
   */
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
