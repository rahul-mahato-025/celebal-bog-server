import { StatusCodes } from "http-status-codes";
import { AuthService } from "../services/index.js";
import serverConfig from "../config/server.config.js";

const authService = new AuthService();

export async function create(req, res, next) {
  try {
    const { firstName, lastName, email, password } = req.body;

    const response = await authService.register({
      firstName,
      lastName,
      email,
      password,
    });

    res.cookie("token", response.token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: serverConfig.ENV === "PROD" ? true : false,
    });

    const user = response.user;

    return res.status(StatusCodes.CREATED).json({
      data: user,
      success: true,
      error: {},
      message: `User registered`,
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const response = await authService.login({
      email,
      password,
    });

    res.cookie("token", response.token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: false,
      secure: serverConfig.ENV === "PROD" ? true : false,
    });

    const user = response.user;

    return res.status(StatusCodes.OK).json({
      data: user,
      success: true,
      error: {},
      message: `Logged in successfully`,
    });
  } catch (error) {
    next(error);
  }
}

export async function logout(req, res, next) {
  try {
    res.clearCookie("token");
    return res.status(StatusCodes.OK).json({
      data: {},
      success: true,
      error: {},
      message: `Logged out successfully`,
    });
  } catch (error) {
    next(error);
  }
}
