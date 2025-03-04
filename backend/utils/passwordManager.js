import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (inputPassword) => {
  try {
    console.log(inputPassword);
    const newPassword = await bcrypt.hash(inputPassword, saltRounds);
    return newPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

export const comparePassword = async (inputPassword, hashedPassword) => {
  try {
    const checkPassword = await bcrypt.compare(
      inputPassword.toString(),
      hashedPassword
    );
    if (!checkPassword) throw new Error();
    return true;
  } catch (error) {
    throw new Error("Invalid Password");
  }
};
