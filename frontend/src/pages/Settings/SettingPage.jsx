import { Send } from "lucide-react";
import { commonConstant } from "../../helper";
import { MainLayout } from "../../layout";
import { useThemeStore } from "../../store";
import { Button, ChatPreviewComponent } from "../../components";

function SettingPage() {
  const { theme, setTheme } = useThemeStore();
  const { applicationThemes } = commonConstant;
  return (
    <MainLayout>
      <div className="h-screen-full container mx-auto px-4 pt-20 max-w-2xl">
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Theme</h2>
            <div className="text-sm text-base-content/70">
              Choose a theme for your chat interface
            </div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {applicationThemes.map((t) => (
              <Button
                key={t}
                onClickHandler={() => setTheme(t)}
                btnStyle={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              >
                <div
                  className="relative h-8 w-full rounded-md overflow-hidden"
                  data-theme={t}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-[11px] font-medium truncate w-full text-center">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </Button>
            ))}
          </div>
        <ChatPreviewComponent />
        </div>
      </div>
    </MainLayout>
  );
}

export default SettingPage;
