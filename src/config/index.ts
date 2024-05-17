import dotend from 'dotenv';
import path from 'path';

dotend.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.MONGODB_URI,
};
