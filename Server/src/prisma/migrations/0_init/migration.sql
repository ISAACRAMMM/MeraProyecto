-- CreateTable
CREATE TABLE "CATEGORIAS_PRODUCTOS" (
    "Id_categoria" SERIAL NOT NULL,
    "Nombre" TEXT,
    "Descripcion" TEXT,

    CONSTRAINT "CATEGORIAS_PRODUCTOS_pkey" PRIMARY KEY ("Id_categoria")
);

-- CreateTable
CREATE TABLE "CONTACTO" (
    "Id_contacto" SERIAL NOT NULL,
    "Tipo" TEXT,
    "Informacion" TEXT,

    CONSTRAINT "CONTACTO_pkey" PRIMARY KEY ("Id_contacto")
);

-- CreateTable
CREATE TABLE "ENCUESTA" (
    "Id_encuesta" SERIAL NOT NULL,
    "Pregunta" TEXT,
    "Respuesta" TEXT,

    CONSTRAINT "ENCUESTA_pkey" PRIMARY KEY ("Id_encuesta")
);

-- CreateTable
CREATE TABLE "INICIO" (
    "Text" TEXT,
    "Imagen1" TEXT,
    "Imagen2" TEXT,
    "Imagen3" TEXT,
    "Imagen4" TEXT
);

-- CreateTable
CREATE TABLE "PRODUCTOS" (
    "id_producto" SERIAL NOT NULL,
    "Nombre" TEXT,
    "Descripcion" TEXT,
    "Id_subcategorias" SERIAL NOT NULL,

    CONSTRAINT "PRODUCTOS_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "SERVICIOS" (
    "Id_contaco" SERIAL NOT NULL,
    "Nombre_servicio" TEXT,
    "Descripcion" TEXT,
    "Imagen1" TEXT,
    "Imagen2" TEXT,

    CONSTRAINT "SERVICIOS_pkey" PRIMARY KEY ("Id_contaco")
);

-- CreateTable
CREATE TABLE "SOBRE_NOSOTROS" (
    "Mision" TEXT,
    "Vision" TEXT,
    "Historia" TEXT,
    "Imagen1" TEXT
);

-- CreateTable
CREATE TABLE "SUB_CATEGORIAS_PRODUCTOS" (
    "Id_subcategoria" SERIAL NOT NULL,
    "Id_categoria" SERIAL NOT NULL,
    "Nombre" TEXT,
    "Descripcion" TEXT,

    CONSTRAINT "SUB_CATEGORIAS_PRODUCTOS_pkey" PRIMARY KEY ("Id_subcategoria")
);

-- CreateTable
CREATE TABLE "USUARIOS" (
    "Id_user" SERIAL NOT NULL,
    "Username" TEXT,
    "Password" TEXT,

    CONSTRAINT "USUARIOS_pkey" PRIMARY KEY ("Id_user")
);

-- AddForeignKey
ALTER TABLE "PRODUCTOS" ADD CONSTRAINT "PRODUCTOS_Id_subcategorias_fkey" FOREIGN KEY ("Id_subcategorias") REFERENCES "SUB_CATEGORIAS_PRODUCTOS"("Id_subcategoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SUB_CATEGORIAS_PRODUCTOS" ADD CONSTRAINT "SUB_CATEGORIAS_PRODUCTOS_Id_categoria_fkey" FOREIGN KEY ("Id_categoria") REFERENCES "CATEGORIAS_PRODUCTOS"("Id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

