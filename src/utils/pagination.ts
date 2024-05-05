import { Request } from 'express';

interface PaginationOptions {
  page: number;
  limit: number;
}

export const getPaginationOptions = (req: Request): PaginationOptions => {
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 10;

  return {
    page: !isNaN(page) && page < 1 ? 1 : page,
    limit: !isNaN(limit) && limit < 1 ? 10 : limit,
  };
};
