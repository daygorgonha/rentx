import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";
import { Router } from "express";
import { AutheticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AutheticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes };
