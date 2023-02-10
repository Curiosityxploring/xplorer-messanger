import { getServerSession } from "next-auth";
import { SessionProvider } from "../components/SessionProvider";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session 
          ? (

          ) : () }
          
        </SessionProvider>
      </body>
    </html>
  );
}
