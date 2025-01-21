-- CreateEnum
CREATE TYPE "WorkerStatus" AS ENUM ('ACTIVE', 'OFFLINE', 'INACTIVE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "daily_hashrate" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "hour_hashrate" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "hsashrate" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "last_profit" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "total_earning" DOUBLE PRECISION DEFAULT 0;

-- CreateTable
CREATE TABLE "Worker" (
    "id" TEXT NOT NULL,
    "nurmic_id" SERIAL NOT NULL,
    "status" "WorkerStatus" NOT NULL DEFAULT 'INACTIVE',
    "minut_profit" INTEGER NOT NULL,
    "hour_profit" INTEGER NOT NULL,
    "rejected_rate" INTEGER NOT NULL,
    "last_submit" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Worker_id_key" ON "Worker"("id");

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
