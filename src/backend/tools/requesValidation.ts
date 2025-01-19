import {Prisma} from '@prisma/client';
import {NextRequest} from "next/server";
import prisma from "@/backend/module/Prisma";

async function requestValidation(req: NextRequest, table: keyof typeof prisma) {
    const models = Prisma.dmmf.datamodel.models

    const mainModel = models.find(o => o.name.toLowerCase() === table)
    const hasName = mainModel?.fields.filter(o => o.documentation)

    const missedKey = hasName?.filter(o => o.documentation !== Object.keys(req)[0])

}

export default requestValidation