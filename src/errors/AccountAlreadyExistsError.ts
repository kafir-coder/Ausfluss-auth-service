export class AccountAlreadyExistsError extends Error {
  constructor() {
    super("There's already a account with same email");
    this.name = 'AccountAlreadyExistsError';
    this.message = 'asfs';
  }
}
