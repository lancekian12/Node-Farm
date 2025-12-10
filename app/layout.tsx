import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Node Farm",
  description: "Node Farm - product demo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Megrim|Nunito+Sans:400,900"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/155/ear-of-maize_1f33d.png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
