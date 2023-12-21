import { connect } from 'mongoose';

export default function dbConnect() {
  const config = useRuntimeConfig();
  return connect(
    `mongodb+srv://${config.private.MONGO_DB_USER}:${config.private.MONGO_DB_PASSWORD}@cluster0.oily3am.mongodb.net`,
    {
      dbName: config.private.MONGO_DB_NAME,
      auth: {
        username: config.private.MONGO_DB_USER,
        password: config.private.MONGO_DB_PASSWORD,
      },
      retryWrites: true,
      writeConcern: { w: 'majority' },
    }
  )
    .then(() => console.log('✔ MongoDb connected'))
    .catch(console.error);
}
