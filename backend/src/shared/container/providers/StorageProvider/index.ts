import { container } from 'tsyringe';

import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './models/IStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};
container.registerSingleton<IStorageProvider>(
  'DiskStorageProvider',
  providers.disk
);
