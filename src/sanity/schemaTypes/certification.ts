export const certification = {
  name: 'certification',
  title: 'Certifications',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'issuer', title: 'Issuer', type: 'string' },
    { 
      name: 'description', 
      title: 'Description', 
      type: 'text',
      description: 'Deskripsi singkat sertifikat (max 100 karakter akan dipotong otomatis)'
    },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'credentialId', title: 'Credential ID', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'color', title: 'Color Tailwind', type: 'string' },
    {
      name: 'previewImage',
      title: 'Thumbnail / Foto Sertifikat',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload foto sertifikat di sini agar muncul di kartu (JPG/PNG)'
    },
    {
      name: 'certificateFile',
      title: 'Certificate File (PDF Only)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload file asli PDF untuk dilihat user'
    },
  ],
}