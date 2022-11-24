-- CreateTable
CREATE TABLE "Sentomo" (
    "id" SERIAL NOT NULL,
    "familly" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mail" TEXT NOT NULL,

    CONSTRAINT "Sentomo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sentomo_password_key" ON "Sentomo"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Sentomo_mail_key" ON "Sentomo"("mail");
