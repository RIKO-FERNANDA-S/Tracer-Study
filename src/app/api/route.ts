import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Success', data: req.body });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     try {
//       const { tempatLahir } = req.body;

//       // Validasi data
//       if (!tempatLahir) {
//         return res.status(400).json({ error: "Semua field harus diisi." });
//       }

//       // Simpan data ke database
//       const newData = await prisma.user.create({
//         data: {
//           tempatLahir
//         },
//       });

//       return res.status(201).json({ message: "Data berhasil disimpan.", data: newData });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Terjadi kesalahan server." });
//     }
//   } else {
//     return res.status(405).json({ error: "Metode tidak diizinkan." });
//   }
// }
