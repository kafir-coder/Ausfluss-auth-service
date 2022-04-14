export class DriverAlreadyExistsError extends Error {
  constructor() {
    super("There's already a driver with same email");
    this.name = 'DriverAlreadyExistsError';
    this.message = 'asfs';
  }
}
