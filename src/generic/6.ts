type ValidationErrors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type UserForm = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  validationErrors: ValidationErrors;
};

type FormParams = Omit<UserForm, "validationErrors">;
