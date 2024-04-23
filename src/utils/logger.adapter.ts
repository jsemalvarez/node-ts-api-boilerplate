import winston, { format } from 'winston';

const { combine, timestamp, json, printf, colorize } = format;

const messageFormat = printf(({ message, timestamp, level, ...meta }) => {
  return `${timestamp} / ${level}=${message} origen=${meta.origen}`;
});

const JSONFormat = format.combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  json(),
  printf(({ timestamp, level, message }) => {
    return JSON.stringify({ timestamp, level, message });
  }),
);

const customLogger = (filename: string, level: string) => {
  return winston.createLogger({
    format: JSONFormat,
    transports: [new winston.transports.File({ filename, level, format: JSONFormat })],
  });
};

const infoLogger = customLogger('logs/info.log', 'info');
const warnLogger = customLogger('logs/warn.log', 'warn');
const errorLogger = customLogger('logs/error.log', 'error');

if (process.env.NODE_ENV !== 'production') {
  const consoleLogger = new winston.transports.Console({
    format: combine(messageFormat, colorize({ all: true })),
  });

  infoLogger.add(consoleLogger);
  warnLogger.add(consoleLogger);
  errorLogger.add(consoleLogger);
}

export const loggerAdapter = {
  info: (message: string, origen: string) => {
    infoLogger.info({ message, origen });
  },
  warn: (message: string, origen: string) => {
    warnLogger.warn({ message, origen });
  },
  error: (message: string, origen: string) => {
    errorLogger.error({ message, origen });
  },
};
