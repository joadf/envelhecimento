import { z } from 'zod'

export const whereEnum = [
    'antiga',
    'indicacao',
    'google',
    'instagram',
    'outros'
] as const

export type whereStatus = typeof whereEnum[number]

export const mappedWhereStatus: { [key in whereStatus]: string } = {
    antiga: 'Já sou cliente',
    indicacao: 'Indicação',
    google: 'Google',
    instagram: 'Instagram',
    outros: 'Outros'    
}

export const formSchema = z.object({
    name: z.string().min(1, { message: 'O nome é obrigatório}' }).max(255),
    phone: z.string().min(1, { message: 'O telefone é obrigatório}' }).max(255),
    where: z.enum(whereEnum, {
        errorMap: () => ({ message: 'Selecione onde conheceu a Dra. Jô'})
    })
})