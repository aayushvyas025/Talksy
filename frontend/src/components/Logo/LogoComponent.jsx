import { MessageSquare } from "lucide-react";
import IconComponent from "../Icon/IconComponent";

function LogoComponent() {
  return (
    <div className="text-center mb-8">
      <div className="flex flex-col items-center gap-2 group">
        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <IconComponent
            icon={MessageSquare}
            iconSize={6}
            iconStyle={"text-primary"}
          />
        </div>
        <h1 className="text-2xl font-bold xl mt-2">Create Account</h1>
        <p className="text-base-content/60">
          Get started with your free account
        </p>
      </div>
    </div>
  );
}

export default LogoComponent;
