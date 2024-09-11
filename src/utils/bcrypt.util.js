import bcrypt from "bcrypt";

export async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, 12);
    return hash;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export function comparePassword(plainPass, hashedPass) {
  return bcrypt.compare(plainPass, hashPassword);
}
