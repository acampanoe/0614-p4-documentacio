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
