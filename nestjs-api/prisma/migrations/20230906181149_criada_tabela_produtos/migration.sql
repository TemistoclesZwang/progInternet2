-- CreateTable
CREATE TABLE "Produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "destinacao" TEXT NOT NULL,
    "rentabilidade" REAL NOT NULL,
    "prazo" DATETIME NOT NULL
);
