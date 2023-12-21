import { Schema, model } from 'mongoose';

const reportSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    file: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export const ReportModel = model('report', reportSchema);
