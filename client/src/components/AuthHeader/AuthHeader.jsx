import { MessageSquare } from "lucide-react";
import React from "react";

function AuthHeader({ formState }) {
  return (
    <div className="text-center mb-8">
      <div className="flex flex-col items-center gap-2 group">
        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <MessageSquare className="size-6 text-primary" />
        </div>
        <div className="text-2xl font-bold mt-2">
          {formState === "signup" ? "Create Account" : ""}
        </div>
        <div className="text-base-content/60">
          {formState === "signup" ? "Get started with your free account" : ""}
        </div>
      </div>
    </div>
  );
}

export default AuthHeader;
