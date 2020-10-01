import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO';

export default interface IMailProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
