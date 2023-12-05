import { registerAs } from '@nestjs/config';

export default registerAs('AppConfig', () => {
  return {
    environment: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
    corsOrigins: JSON.parse(process.env.CORS_ORIGINS || '[]'),
    grpc: {
      ms_auth: process.env.PATH_MS_AUTH,
    },
  };
});
