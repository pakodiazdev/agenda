const readline = require('./readline');

async function agregarContacto (contactos) {
    console.log("Agregando un nuevo contacto...");

    console.log("Ingrese el nombre del contacto:");
    const nombre = await readline();
    console.log("Ingrese el teléfono del contacto:");
    
    const telefono = await readline();
    console.log("Ingrese el email del contacto:");
    const email = await readline();
    
    const nuevoContacto = {
        id: contactos.length + 1,
        nombre,
        telefono,
        email
    };
    
    contactos.push(nuevoContacto);
    console.log("Contacto agregado con éxito.");
}

module.exports = agregarContacto;