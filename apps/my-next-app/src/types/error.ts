export class AppError extends Error {
  constructor(
    public code: string | number,
    public message: string,
    public isExpected: boolean = false,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export type ErrorResponse = {
  code: string | number;
  message: string;
  isExpected: boolean;
};
