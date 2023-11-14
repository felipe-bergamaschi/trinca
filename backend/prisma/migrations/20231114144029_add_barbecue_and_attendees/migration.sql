-- CreateTable
CREATE TABLE "Barbecue" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "fee" REAL NOT NULL,
    "barbecueId" INTEGER,
    CONSTRAINT "Attendees_barbecueId_fkey" FOREIGN KEY ("barbecueId") REFERENCES "Barbecue" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
