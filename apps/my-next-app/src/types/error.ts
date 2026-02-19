export class AppError extends Error {
  constructor(
    public code: string | number,
    public message: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export type ErrorResponse = {
  code: string | number;
  message: string;
};
