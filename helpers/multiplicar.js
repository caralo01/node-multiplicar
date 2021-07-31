const fs = require('fs');

const crearArchivo = async (base, list, to) => {
  try {
    let salida = '';

    for(let i = 1; i < to + 1; i++) {
      salida += `${i} x ${base} = ${i * base}\n`;
    }

    if(list) {
      console.log("==========".blue);
      console.log("Tabla del", base);
      console.log("==========".blue);
      console.log(salida.yellow);
    }

    await fs.writeFileSync(`tables/table-${base}.txt`, salida) ;

    return `tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}