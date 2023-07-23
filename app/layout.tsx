import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ptBR } from "@clerk/localizations";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { SocialCard } from "@/components/social-card";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DeoStore | Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SocialCard />
            <ToasterProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
