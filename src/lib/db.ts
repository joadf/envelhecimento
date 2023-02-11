import { prisma } from "./prisma";

export interface Lead {
    id: number;
    name: string;
    phone: string;
    where: string;
}

export async function getAllLeads() {

    const data = await prisma.lead.findMany();

    return data;

}

export async function createLead(name: string, phone: string, where: string) {

    const lead = await prisma.lead.create({
        data: {
            name,
            phone,
            where
        }
    });

    return lead;
    
}


