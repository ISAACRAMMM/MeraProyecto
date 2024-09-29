import { PrismaClient } from "@prisma/client"; //manejo de la base de datos
const prisma = new PrismaClient();


export const newEncuesta = async (respuestas) => {
    const use = await prisma.user.create({
        data: {
          email: 'elsa@prisma.io',
          name: 'Elsa Prisma',
        },
      })
}