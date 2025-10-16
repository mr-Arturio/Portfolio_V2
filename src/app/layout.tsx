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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=localStorage.getItem("theme");var d=t==="dark";var de=document.documentElement;if(d){de.setAttribute("theme","dark")}else{de.removeAttribute("theme")}document.addEventListener("DOMContentLoaded",function(){var b=document.body;if(!b)return;if(d){b.setAttribute("theme","dark")}else{b.removeAttribute("theme")}})}catch(e){}})();',
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
