import fs from 'fs';

export const readDir = async (path: string) => {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
        console.log(dirent.name);
      }
    return dir;
}