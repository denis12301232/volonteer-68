import { ValidationError } from 'yup';
import { ReportModel } from '~/server/db/mongo/models';
import { Schema } from '~/validation';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    Schema.Report.IndexId.validateSync(id);
    const report = await ReportModel.findById(id).lean();
    return report;
  } catch (e) {
    if (e instanceof ValidationError) {
      throw createError({ statusCode: 403, message: e.message, cause: e.cause, name: e.name });
    } else {
      throw createError({ statusCode: 500 });
    }
  }
});
