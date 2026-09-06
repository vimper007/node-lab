import { env } from "../env.ts";
import { app } from "./server.ts";

app.listen(env.PORT, () => console.log("Port running on 3000"))