const { exec } = require('child_process');

function limpiarPantalla() {
    const comando = process.platform === 'win32' ? 'cls' : 'clear';
    process.stdout.write('\x1Bc');
    console.clear();
    exec(comando, (error) => {
        if (error) {
            console.error('No se pudo limpiar la pantalla:', error);
        }
    });
}

module.exports = limpiarPantalla;