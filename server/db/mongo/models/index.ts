import { Schema, model } from 'mongoose';

const reportSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export const ReportModel = model('report', reportSchema);
