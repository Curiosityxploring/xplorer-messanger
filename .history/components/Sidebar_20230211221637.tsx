"use client";

import { useSession } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (session.user?.image!)}
    </div>
  );
}

export default Sidebar;
