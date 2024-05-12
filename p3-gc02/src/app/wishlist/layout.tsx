import ServerProtectedComponent from "@/components/ServerProtectedComponent";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ServerProtectedComponent>{children}</ServerProtectedComponent>;
}
