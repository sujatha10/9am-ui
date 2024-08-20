"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Login } from "./Login/Login";
import "./globals.css";
import { appStore } from "./redux/store"
import { Provider, useSelector } from "react-redux";
import LayoutWrapper from "./layoutWrapper";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
          <LayoutWrapper> 
           {children}  
          </LayoutWrapper>     
        </Provider>
        </body>
    </html>
  );
}
