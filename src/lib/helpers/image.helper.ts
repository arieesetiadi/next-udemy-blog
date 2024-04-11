import fs from 'fs/promises';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

export async function generateBlurHash(imagePath: string): Promise<string> {
  const imageFullPath = path.join(process.cwd(), 'public', imagePath);
  const buffer = await fs.readFile(imageFullPath);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
