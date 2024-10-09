import { PrismaClient } from "@prisma/client"; //manejo de la base de datos
const prisma = new PrismaClient();


const deleteProducto= async (id) => {
    const deleteUser = await prisma.user.delete({
        where: {
          email: 'bert@prisma.io',
        },
      })
}