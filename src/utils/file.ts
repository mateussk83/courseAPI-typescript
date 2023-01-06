import fs from "fs"

export const deleteFile = async (filename: string) => {
// o stat do promises verifica se o arquivo existe
 try {
  await fs.promises.stat(filename);

 }catch {
  return;
 }
 // remove o arquivo indicado
 await fs.promises.unlink(filename);
}