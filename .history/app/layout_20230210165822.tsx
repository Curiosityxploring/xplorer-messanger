import { getServerSession } from "next-auth";
import { SessionProvider } from "../components/SessionProvider";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(auth);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar />
            </div>
            {/* ClientProvider - Notification */}
            <div className="bg-[#343541] flex-1"> {children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
