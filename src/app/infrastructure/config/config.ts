import { registerAs } from '@nestjs/config';

export default registerAs('AppConfig', () => {
  return {
    environment: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    corsOrigins: JSON.parse(process.env.CORS_ORIGINS || '[]'),
  };
});
