/*
  Warnings:

  - Added the required column `township` to the `CustomerRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CustomerRecord` ADD COLUMN `township` VARCHAR(191) NOT NULL;
