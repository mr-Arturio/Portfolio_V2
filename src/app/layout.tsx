import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio of Artur T",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        dangerouslySetInnerHTML={{
          __html:
            '(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.body.setAttribute("theme","dark")}else{document.body.removeAttribute("theme")}}catch(e){}})();',
        }}
      />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
