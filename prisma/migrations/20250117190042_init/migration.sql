-- CreateTable
CREATE TABLE "Profit" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hashrat" TEXT NOT NULL,
    "total_profit" DOUBLE PRECISION NOT NULL,
    "unit_output" DOUBLE PRECISION NOT NULL,
    "coin_price" DOUBLE PRECISION NOT NULL,
    "usd_total_profit" DOUBLE PRECISION NOT NULL,
    "solo_profit" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PPSprofit" (
    "id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "hashrate" TEXT NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "profit_id" TEXT NOT NULL,

    CONSTRAINT "PPSprofit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PplnsProfit" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "block_height" INTEGER NOT NULL,
    "block_reward" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "profit_id" TEXT NOT NULL,

    CONSTRAINT "PplnsProfit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profit_id_key" ON "Profit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PPSprofit_id_key" ON "PPSprofit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PplnsProfit_id_key" ON "PplnsProfit"("id");

-- AddForeignKey
ALTER TABLE "Profit" ADD CONSTRAINT "Profit_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PPSprofit" ADD CONSTRAINT "PPSprofit_profit_id_fkey" FOREIGN KEY ("profit_id") REFERENCES "Profit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PplnsProfit" ADD CONSTRAINT "PplnsProfit_profit_id_fkey" FOREIGN KEY ("profit_id") REFERENCES "Profit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
