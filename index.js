const fs = require('fs')

class ProductManager {

    constructor(file) {
        this.producto = file
    }

    async addProduct(producto) {

        await fs.promises.writeFile('productos.json', JSON.stringify(producto))
        console.log(producto)
    }

    async getProducts() {
        let lista_productos = await fs.promises.readFile('productos.json', 'utf-8')
        console.log(JSON.parse(lista_productos));
    }

    async getProductById(id) {
        let producto = await fs.promises.readFile('productos.json', 'utf-8', id)
    }

    async updateProduct(id) {
        let producto = await fs.promises.readFile('prodcutos.json', 'utf-8', id)
        await fs.promises.appendFile('productos.json', JSON.stringify(producto))
    }

    async deleteProduct(id) {
        let producto = await fs.promises.readFile('productos.json', 'utf-8', id)
        await fs.promises.unlink(producto)
    }

}

const Product = new ProductManager


let producto = { nombre: "silla", descripcion: "silla muy comoda", codigo: "abc123", precio: 2000, stock: 20, categoria: "muebles" }
let producto2 = { nombre: "mesa", descripcion: "mesa muy amplia", coidgo: "abc321", precio: 3000, stock: 15, categoria: "muebles" }

Product.addProduct(producto)
/*
let form = document.querySelector("form")
form.addEventListener("submit", function (e) {
    e.preventDefault()
})

let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descripcion");
let codigo = document.getElementById("codigo");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");
let imagen = document.getElementById("imagen");
let id = 1;


let btn = document.getElementById("agregar")
btn.addEventListener("click", function () {
    nombre.value;
    descripcion.value;
    codigo.value;
    precio.value;
    stock.value;
    imagen.value;

    if ((nombre != "") || (descripcion != "") || (codigo != "") || (precio != 0) || (stock != 0)){
        let lista = document.getElementById("lista-productos");
        let li = document.createElement("li");

        li.innerHTML = `
        <li> ID #${id++}</li>
        <li>Nombre: ${nombre} </li>
        <li>Descripcion: ${descripcion}</li>
        <li>Codigo: ${codigo}</li>
        <li>Precio: ${precio}</li>
        <li>Stock: ${stock}</li>
        <li>Imagen: ${imagen}</li>`

        lista.append(li)

        const producto = {
            id: `${id}`,
            nombre: `${nombre}`,
            descripcion: `${descripcion}`,
            codigo: `${codigo}`,
            precio: `${precio}`,
            stock: `${stock}`,
            imagen: `${imagen}`
        }

        Product.addProduct(producto)
    }
})

*/
