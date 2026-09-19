import { ChatPreview, ThemeContainer } from "@/components";
import Layout from "@/Layout/Layout";
import React, { Suspense } from "react";

function Setting() {
  return (
    <Suspense>
      <Layout styles={"h-screen"}>
        <div className="container mx-auto px-4 pt-20 max-w-5xl">
          <ThemeContainer />
          <ChatPreview />
        </div>
      </Layout>
    </Suspense>
  );
}

export default Setting;
