import {Storage} from '@google-cloud/storage';

const bucketName = 'surf-marketplace';
const storage = new Storage();

export const uploadFileOnCloud = async ({
  filePath,
  destinationFileName
}: {
  filePath: string;
  destinationFileName: string;
}): Promise<void> => {
  await storage.bucket(bucketName).upload(filePath, {
    destination: destinationFileName
  });
};
