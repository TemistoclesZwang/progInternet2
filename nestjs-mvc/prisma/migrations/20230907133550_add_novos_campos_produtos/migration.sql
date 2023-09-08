/*
  Warnings:

  - Added the required column `destinacao` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prazo` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rentabilidade` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `taxaAdministracao` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "destinacao" TEXT NOT NULL,
    "rentabilidade" REAL NOT NULL,
    "prazo" DATETIME NOT NULL,
    "taxaAdministracao" REAL NOT NULL
);
INSERT INTO "new_Produtos" ("id", "nome", "status") SELECT "id", "nome", "status" FROM "Produtos";
DROP TABLE "Produtos";
ALTER TABLE "new_Produtos" RENAME TO "Produtos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
