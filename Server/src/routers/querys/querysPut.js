import { PrismaClient } from "@prisma/client"; //manejo de la base de datos
const prisma = new PrismaClient();

const updateProducto = async (id, nombre, descripcion, subcategoria) => {
    const update = await prisma.PRODUCTOS.update({
        where: {
          Id_producto: id,
         
        },
        data: {
            Nombre: nombre,
            Descripcion: descripcion,
            Id_subcategorias: subcategoria
        },
      })
}