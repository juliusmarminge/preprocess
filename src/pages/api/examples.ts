// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "../../server/db/client";
import { env } from "../../env/server.mjs";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  // const examples = await prisma.example.findMany();
  res.status(200).json({ nextAuthUrl: env.NEXTAUTH_URL });
};

export default examples;
