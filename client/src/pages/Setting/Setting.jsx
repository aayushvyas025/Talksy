import Layout from "@/Layout/Layout";
import React, { Suspense } from "react";

function Setting() {
  return (
    <Suspense>
      <Layout styles={"h-screen container mx-auto px-4 pt-20 max-w-5xl"}>
        Setting Page
      </Layout>
    </Suspense>
  );
}

export default Setting;
