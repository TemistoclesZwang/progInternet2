/*
  Warnings:

  - You are about to drop the `_PessoasToStacks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `stack` on the `Stacks` table. All the data in the column will be lost.
  - Added the required column `pessoaId` to the `Stacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stackNome` to the `Stacks` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_PessoasToStacks_B_index";

-- DropIndex
DROP INDEX "_PessoasToStacks_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PessoasToStacks";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stacks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stackNome" TEXT NOT NULL,
    "pessoaId" TEXT NOT NULL,
    CONSTRAINT "Stacks_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Stacks" ("id") SELECT "id" FROM "Stacks";
DROP TABLE "Stacks";
ALTER TABLE "new_Stacks" RENAME TO "Stacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
