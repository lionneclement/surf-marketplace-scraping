import download from 'download';

export const downloadImage = async ({url, filename}: {url: string; filename: string}): Promise<void> => {
  await download(url, 'download/image', {filename});
};
