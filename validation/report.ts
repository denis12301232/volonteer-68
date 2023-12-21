import { object, number, string } from 'yup';

export class Report {
  static Index = object({
    skip: number().required(),
    limit: number().required().positive(),
  });

  static IndexId = string().required();
}
