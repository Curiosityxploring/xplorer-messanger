import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          {/* Sidebar */}
          <div>
          <Sidebar/>
          </div>
          {/* ClientProvider - Notification */}
          <div className="bg-[#343541] flex-1"> {children}</div>
        </div>
      </body>
    </html>
  );
}
