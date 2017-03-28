import winston from 'winston';

winston.level = 'debug';

export const log = (message, level = 'info') => winston.log(level, message);
