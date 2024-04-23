export interface CustomError extends Error {
  statusCode: number;
  origin?: string;
}
