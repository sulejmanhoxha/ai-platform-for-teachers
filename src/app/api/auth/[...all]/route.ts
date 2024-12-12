// path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth";

export const { POST, GET } = toNextJsHandler(auth);
