const menu = require("./funciones/menu");
const readline = require('./funciones/readline');
const obtenerContacto = require("./funciones/obtener-contactos");
const listarContactos = require("./funciones/listar-contactos");
const buscarContacto = require("./funciones/buscar-contacto");
const agregarContacto = require("./funciones/agregar-contacto");
const limpiarPantalla = require("./funciones/limpiar-pantalla")

async function main() {
    let salir = false;
    limpiarPantalla();
    const contactos = obtenerContacto();
    while (salir == false) {
        menu();
        const opcion = await readline();
        switch (opcion) {
            case "1":
                await agregarContacto(contactos);
                break;
            case "2":
                listarContactos(contactos);
                break;
            case "3":
                buscarContacto(contactos);
                break;
            case "4":
                console.log("Salir");
                salir = true;
                break;
            default:
                console.log("Opción no válida");
                break;
        }
    }

}

main();