import { Router } from "express";

const recipeRouter = Router();

recipeRouter.post("/recipes");
recipeRouter.get("/recipes/:id");
recipeRouter.delete("/recipes/:id");
recipeRouter.post("/recipes/check/name");

export default recipeRouter;