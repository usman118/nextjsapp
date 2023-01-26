// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = {
    name: "John Doe",
    username: "JohnDoe",
    email: "johndoe@example.com",
    phone: "1234567890",
    website: "example.com",
  };
  res.status(200).json(data);
}
