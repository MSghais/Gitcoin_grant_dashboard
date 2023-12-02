// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }
declare global {
  var prisma: PrismaClient | undefined; // This must be a `var` and not a `let / const`
}

// let prisma: PrismaClient;
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"],
  });
// export const client = global.prisma || new PrismaClient();
// export const clientMg = global.prisma || new PrismaClient();
export const client = global.prisma || new PrismaClient();

// export const client = new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";


// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClientSingleton | undefined
// }

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// export default prisma

