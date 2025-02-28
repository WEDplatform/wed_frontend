import localFont from "next/font/local";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme.js"
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import "./globals.css";
import { TanstackProvider } from "./Components/provider/tanstackprovider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const queryClient = new QueryClient()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
        <AppRouterCacheProvider>
       <ThemeProvider theme={theme}>
       {children}
       </ThemeProvider>
        </AppRouterCacheProvider>
        </TanstackProvider>
      </body>
      </html>
  );
}
