-- AlterTable
ALTER TABLE "transaction" ADD COLUMN     "accountsId" INTEGER;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_accountsId_fkey" FOREIGN KEY ("accountsId") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
