import { ThemeContainer } from "@/components";
import Layout from "@/Layout/Layout";
import React, { Suspense } from "react";

function Setting() {
  return (
    <Suspense>
      <Layout styles={"h-screen"}>
        <ThemeContainer />
      </Layout>
    </Suspense>
  );
}

export default Setting;
