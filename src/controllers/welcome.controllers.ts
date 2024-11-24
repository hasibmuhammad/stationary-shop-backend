import { Request, Response } from "express";

const welcome = (req: Request, res: Response) => {
  console.log(req.method);
  res
    .status(200)
    .json({ message: "Welcome to stationary shop backend", success: true });
};

export const welcomeControllers = { welcome };
