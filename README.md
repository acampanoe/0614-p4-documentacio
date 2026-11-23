# Compres · documentació i control de versions

Pràctica de la píndola **P4 · Documentació i control de versions** del mòdul 0614 *Desplegament d'aplicacions web* (DAW2, Politècnics, curs 2026/27).

## Què és

`compras.js` simula una botiga en línia molt senzilla amb tres classes:

| Classe | Què representa | Mètodes |
|---|---|---|
| `Producto` | Un article amb nom, preu i quantitat | `calcularTotal()` |
| `Carrito` | La llista de productes que vol comprar un usuari | `agregarProducto()`, `calcularTotalCarrito()`, `vaciarCarrito()` |
| `Usuario` | Una persona amb nom, correu i un carret propi | `agregarProductoAlCarrito()`, `finalizarCompra()` |

## Com s'executa

Cal tenir [Node.js](https://nodejs.org/) instal·lat:

```bash
node compras.js
```

Sortida esperada:

```
Usuario Juan ha realizado una compra por un total de 1240€
```

(1 portàtil de 1.200 € + 2 ratolins de 20 € = 1.240 €)

## Flux de treball amb Git

1. Es crea el repositori amb el codi original a la branca `master`.
2. Es clona el repositori: `git clone <url>`.
3. Per a cada classe es crea una branca (`doc-producto`, `doc-carrito`, `doc-usuario`), s'hi afegeixen els comentaris **JSDoc**, es fa `commit` i `push`.
4. Per a cada branca s'obre un **pull request** cap a `master`.
5. La persona creadora revisa cada pull request, decideix si l'accepta i, si hi ha conflictes, els resol.

Les tres branques es van crear a partir del mateix commit de `master` i es van fusionar una darrere l'altra sense conflictes, perquè cada classe es troba en una part diferent del fitxer.

## Documentació

- Comentaris **JSDoc** dins de `compras.js`: classes, propietats, paràmetres i valors de retorn.
- **Wiki** del repositori: una pàgina per classe i una pàgina amb el funcionament complet.

## Equip

Aquest repositori l'ha fet una sola persona, per tant les tres classes les ha documentades la mateixa persona.

| Membre | Classe documentada |
|---|---|
| Àlex Campano Eichmann (creador del repositori) | `Producto`, `Carrito` i `Usuario` |
