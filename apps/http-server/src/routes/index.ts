// Node Modules
import { Router } from "express";
// Types
import type { Router as R } from "express";

const router: R = Router();

router.get("/", (_, res) => {
  console.log("API is live", {
    docs: "",
    version: "0.1.0",
    timestamp: new Date(Date.now()).toISOString(),
  });

  res.status(200).json({
    message: "API is live",
    docs: "",
    version: "0.1.0",
    timestamp: new Date(Date.now()).toISOString(),
  });
});

export default router;
