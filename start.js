#!/usr/bin/env -S node --experimental-strip-types --no-warnings=ExperimentalWarning --watch

import { app } from "./src/index.ts";

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
