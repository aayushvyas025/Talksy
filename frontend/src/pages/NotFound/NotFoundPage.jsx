import { Home, LogIn } from "lucide-react";
import { LinkComponent } from "../../components";
import { MainLayout } from "../../layout";
import { useAuthStore } from "../../store";

function NotFoundPage() {
  const { authUser } = useAuthStore();
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-7xl font-bold text-base-content mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base-content/70 mb-6 max-w-md">
          Oops! The page you’re looking for doesn’t exist or might have been
          moved. Let’s get you back on track.
        </p>
        <LinkComponent
          href={authUser ? "/" : "/login"}
          linkStyle={
            "inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black rounded-full hover:bg-primary/90 transition-all"
          }
          linkIcon={authUser ? Home: LogIn}
          linkIconSize={5}
          linkText={authUser ?"Go Home" : "Login Page"}
        />
      </div>
    </MainLayout>
  );
}

export default NotFoundPage;
