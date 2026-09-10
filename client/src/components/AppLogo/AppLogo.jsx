import { MessageSquare } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function AppLogo() {
  return (
    <div className="flex items-center gap-8">
      <Link
        to={"/"}
        className="flex items-center gap-2.5 hover:opacity-80 transition-all"
      >
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-primary" />
        </div>
        <div className="text-lg font-bold">Talksy</div>
      </Link>
    </div>
  );
}

export default AppLogo;
