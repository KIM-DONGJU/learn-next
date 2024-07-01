import { removeCartItem } from '@/api';
import type { NextApiRequest, NextApiResponse } from 'next';

// http://localhost:3000/api/carts
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.body;

  const { data } = await removeCartItem(id);
  res.status(200).send(`${data.name} 삭제가 되었습니다.`);
}
