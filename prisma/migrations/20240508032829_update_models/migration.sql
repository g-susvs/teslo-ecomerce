/*
  Warnings:

  - The values [SizeM] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');
ALTER TABLE "Product" ALTER COLUMN "sizes" TYPE "Size_new"[] USING ("sizes"::text::"Size_new"[]);
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
COMMIT;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "inStock" DROP DEFAULT,
ALTER COLUMN "sizes" SET DEFAULT ARRAY[]::"Size"[];
