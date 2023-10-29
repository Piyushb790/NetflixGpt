export const validate = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);

  if (!isEmailValid) return "email is not valid";
  if (!isPasswordValid) return "password is not valid";

  return null;
};
