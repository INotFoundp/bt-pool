import {PrismaClient} from "@prisma/client";


// @ts-ignore
const instance: PrismaClient = global?.instance ?? new PrismaClient();
// @ts-ignore
global.instance = instance;

const prisma = instance.$extends({
    result: {
        user: {
            password: {
                needs: {
                    password: true
                },
                compute : (password) => {
                    return () => password
                }
            }
        }
    }
})

export default prisma