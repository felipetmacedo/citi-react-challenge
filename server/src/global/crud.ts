import { Request, Response } from "express";
import Citi from "./Citi";

interface Crud {
  create?: (request: Request, response: Response) => Promise<Response>;
  get?: (request: Request, response: Response) => Promise<Response>;
  delete?: (request: Request, response: Response) => Promise<Response>;
  update?: (request: Request, response: Response) => Promise<Response>;
}

export { Crud };
