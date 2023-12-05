import type { Query } from '~/types';
import { ReportModel } from '~/server/db/mongo/models';
import { Schema } from '~/validation';
import { ValidationError } from 'yup';

export default defineEventHandler(async (event) => {
   try {
      const query = getQuery<Query.Report.Index>(event);
      Schema.Report.Index.validateSync(query);
      const [reports, total] = await Promise.all([
         ReportModel.find().skip(query.skip).limit(query.limit).lean(),
         ReportModel.countDocuments(),
      ]);

      return { reports, total };
   } catch (e) {
      if (e instanceof ValidationError) {
         throw createError({ statusCode: 403, message: e.message, cause: e.cause, name: e.name });
      } else {
         throw createError({ statusCode: 500 });
      }
   }
});
