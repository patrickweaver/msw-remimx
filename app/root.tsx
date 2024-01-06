import React from "React";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { setupServer } from "msw/node";

const handlers = [];
const server = setupServer(...handlers);

if (process.env.NODE_ENV === "development") {
  server.listen();
}

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
