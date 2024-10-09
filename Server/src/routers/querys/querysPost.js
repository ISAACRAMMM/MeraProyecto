import { PrismaClient } from "@prisma/client"; //manejo de la base de datos
const prisma = new PrismaClient();


export const newEncuesta = async (respuestas) => {
  try {
    const encuesta = await prisma.ENCUESTA.create({
        data: {
          Pregunta: respuestas.Pregunta,
          Respuesta: respuestas.Respuesta
        },
      })
    } catch(e) {
      console.error(e);
      process.exit(1);
    }
      finally {
      await prisma.$disconnect();
    }
}

export const newContacto = async (contacto) => {

}

export const newProducto = async (nombre, descripcion, categoria) => {
  try{

    const producto = await prisma.PRODUCTOS.create({
      data: {
        Nombre: nombre,
        Descripcion: descripcion,
        Id_subcategorias: categoria 
      }
    })

    

  }catch(e) {
    console.error(e);
    process.exit(1);
  }finally {
    await prisma.$disconnect();
  }
}
