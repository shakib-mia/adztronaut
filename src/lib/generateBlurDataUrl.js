import { getPlaiceholder } from "plaiceholder";

export async function generateBlurDataUrl(imageUrl) {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
