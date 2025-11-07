import { Navbar } from "../../components";

function HomePageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-screen-full bg-base-200 ">
        <div className="flex items-center justify-center pt-20 px-4">
          <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
            <div className="flex h-full rounded-lg overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageLayout;
