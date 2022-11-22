/*
  Warnings:

  - You are about to drop the column `userId` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accountsId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountsId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_userId_fkey";

-- DropIndex
DROP INDEX "accounts_userId_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accountsId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_accountsId_key" ON "users"("accountsId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_accountsId_fkey" FOREIGN KEY ("accountsId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
