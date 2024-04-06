import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


export default function ServerProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenCookie = cookies().get("Authorization");

  if (!tokenCookie) {
    return redirect("/");
  }

  return children;
}
