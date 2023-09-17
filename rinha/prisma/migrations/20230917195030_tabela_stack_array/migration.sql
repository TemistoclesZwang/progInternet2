/*
  Warnings:

  - You are about to drop the column `stack` on the `Pessoas` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Stacks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stack" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PessoasToStacks" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PessoasToStacks_A_fkey" FOREIGN KEY ("A") REFERENCES "Pessoas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PessoasToStacks_B_fkey" FOREIGN KEY ("B") REFERENCES "Stacks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pessoas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL
);
INSERT INTO "new_Pessoas" ("apelido", "id", "nascimento", "nome") SELECT "apelido", "id", "nascimento", "nome" FROM "Pessoas";
DROP TABLE "Pessoas";
ALTER TABLE "new_Pessoas" RENAME TO "Pessoas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_PessoasToStacks_AB_unique" ON "_PessoasToStacks"("A", "B");

-- CreateIndex
CREATE INDEX "_PessoasToStacks_B_index" ON "_PessoasToStacks"("B");
