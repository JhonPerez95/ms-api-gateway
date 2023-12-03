import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

export function validateConfigValues(configService: ConfigService) {
  validateValues(configService.get(`AppConfig`));
}

const validateValues = (object: any, parent = '') => {
  for (const prop in object) {
    const isParent = parent ? `${parent}.` : '';
    const key = `${isParent}${prop}`;
    const value = object[prop];
    if (typeof value === 'object' && !Array.isArray(value)) {
      validateValues(value, key);
    } else {
      if (value === undefined || value === '') {
        Logger.error(`${key}: has no value in config`);
        throw new Error(`the ${prop} has no value`);
      }
      Logger.verbose(value, key);
    }
  }
};
