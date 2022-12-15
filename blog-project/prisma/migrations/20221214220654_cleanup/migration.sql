-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "excerpt" TEXT,
    "date" TEXT,
    "image" TEXT,
    "isFeatured" BOOLEAN NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact_Message" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "message" TEXT,

    CONSTRAINT "Contact_Message_pkey" PRIMARY KEY ("id")
);
