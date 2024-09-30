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
