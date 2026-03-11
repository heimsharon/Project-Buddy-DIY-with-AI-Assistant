type ValidationResult = {
  isValid: boolean;
  message: string | null;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmailField(email: string): ValidationResult {
  const trimmed = email.trim();

  if (!trimmed) {
    return { isValid: false, message: 'Please enter a valid email address.' };
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return { isValid: false, message: 'Invalid email format.' };
  }

  return { isValid: true, message: null };
}

export function validateEmailUpdateForm(input: {
  updatedEmail: string;
  currentPassword: string;
}): ValidationResult {
  const emailValidation = validateEmailField(input.updatedEmail);
  if (!emailValidation.isValid) return emailValidation;

  if (!input.currentPassword.trim()) {
    return {
      isValid: false,
      message:
        'Please enter your current password to update your email address.',
    };
  }

  return { isValid: true, message: null };
}
