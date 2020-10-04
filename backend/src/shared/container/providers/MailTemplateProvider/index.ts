import { container } from 'tsyringe';

import HandlebarsMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';
import IMailTemplateProvider from './models/IMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};
container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars
);
