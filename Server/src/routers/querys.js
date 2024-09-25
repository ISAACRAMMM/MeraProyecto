import { PrismaClient } from "@prisma/client"; //manejo de la base de datos
const prisma = new PrismaClient();


export const getInicio = async () => {
    try {
        const inicio = await prisma.INICIO.findMany();
        return inicio;
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
};

export const getContacto = async () => {
    try {
        const contacto= await prisma.CONTACTO.findMany()
        return contacto;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }
};

export const getServicios = async () => {
    try {
        const servicios = await prisma.SERVICIOS.findMany()
        return servicios;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }
}


export const getEncuesta = async () => {
    try {
        const encuesta = await prisma.ENCUESTA.findMany()
        return encuesta;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }
}


export const getNosotros = async () => {
    try {
        const nosotros = await prisma.SOBRE_NOSOTROS.findMany()
        return nosotros;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }

}

export const getProdutos = async () => {
    try {
        const productos = await prisma.PRODUCTOS.findMany()
        return productos;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }
}

export const getSubcategorias = async () => {
    try {
        const subcategorias = await prisma.SUB_CATEGORIAS_PRODUCTOS.findMany()
        return subcategorias;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }
}

export const getCategorias = async () => {
        try {
            const categorias = await prisma.CATEGORIAS_PRODUCTOS.findMany()
            return categorias;
        } catch (error) {
            console.error(error);
        } finally{
            await prisma.$disconnect();
        }
}

export const getUsuarios = async () => {
    try {
        const usuarios = await prisma.USUARIOS.findMany()
        return usuarios;
    } catch (error) {
        console.error(error);
    } finally{
        await prisma.$disconnect();
    }
}

