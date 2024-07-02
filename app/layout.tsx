import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edit Store | OnShop",
  description: "you can edit and modify your store here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-500">{children}</body>
    </html>
  );
}
