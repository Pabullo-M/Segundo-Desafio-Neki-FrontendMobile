import { z } from "zod";

const allowedDomains = ['neki.com.br', 'neki-it.com.br'];


    const isValidDomain = (email: string) => {
        const domain = email.split('@')[1];
        return allowedDomains.includes(domain);
    };

   export const perfilSchema = z.object({
        nomeCompleto: z.string().min(1, { message: "Nome Completo é obrigatório." }),
        email: z.string()
            .email({ message: "Email inválido." })
            .transform((email) => email.toLowerCase())
            .refine(isValidDomain, { message: "E-mail deve ser de um domínio permitido (neki.com.br ou neki-it.com.br)." }),
        foto: z.string().min(1, { message: "URL da Foto é obrigatória." }),
        dataNascimento: z.string()
        .min(1, { message: "Data de Nascimento é obrigatória." })
        .regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, {
          message: "Data de Nascimento deve estar no formato yyyy/mm/dd.",
        })
    });