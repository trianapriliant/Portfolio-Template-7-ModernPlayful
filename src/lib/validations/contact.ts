import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nama harus minimal 2 karakter')
    .max(50, 'Nama maksimal 50 karakter'),
  email: z
    .string()
    .email('Format email tidak valid')
    .min(1, 'Email wajib diisi'),
  subject: z
    .string()
    .min(5, 'Subject harus minimal 5 karakter')
    .max(100, 'Subject maksimal 100 karakter'),
  message: z
    .string()
    .min(10, 'Pesan harus minimal 10 karakter')
    .max(1000, 'Pesan maksimal 1000 karakter'),
  company: z
    .string()
    .optional(),
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true
      return /^(\+62|62|0)[0-9]{9,12}$/.test(val)
    }, 'Format nomor telepon tidak valid'),
})

export type ContactFormData = z.infer<typeof contactSchema>
