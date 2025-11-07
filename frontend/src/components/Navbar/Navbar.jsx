import { LogOut, Settings, User } from "lucide-react";
import { useAuthStore } from "../../store";
import HeaderLogo from "../Logo/HeaderLogo";
import LinkComponent from "../Link/LinkComponent";
import Button from "../Button/Button";
import IconComponent from "../Icon/IconComponent";

function Navbar() {
  const { logoutUser, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300 fiexed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full ">
          <HeaderLogo title={"Talksy"} />
          <div className="flex items-center gap-5">
            <LinkComponent
              href={"/settings"}
              linkStyle={"btn btn-sm gap-2 transition-colors"}
              linkIcon={Settings}
              linkIconSize={5}
              linkText={"Settings"}
            />
            {authUser && (
              <>
                <LinkComponent
                  href={"/profile"}
                  linkStyle={"btn btn-sm gap-2"}
                  linkIcon={User}
                  linkIconSize={5}
                  linkText={"Profile"}
                />
                <Button
                  btnType="button"
                  btnStyle={"flex gap-2 items-center"}
                  onClickHandler={logoutUser}
                  btnIcon={<IconComponent iconSize={5} icon={LogOut} />}
                >
                  <span className="hidden sm:inline">logout</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
