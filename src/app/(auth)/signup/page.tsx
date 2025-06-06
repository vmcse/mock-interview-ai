import { auth } from "@/lib/auth";
import { SignupView } from "@/modules/auth/ui/views/signup-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignupView />;
};

export default Page;
