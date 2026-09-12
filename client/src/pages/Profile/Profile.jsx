import { ProfileHeader } from "@/components";
import Layout from "@/Layout/Layout";
import React, { Suspense } from "react";

function Profile() {
  return (
    <Suspense>
      <Layout styles={"h-screen pt-20"}>
        <div className="max-w-2xl mx-auto p-4 py-8">
          <ProfileHeader
            title={"Profile"}
            subtitle={"Your profile information"}
          />
        </div>
      </Layout>
    </Suspense>
  );
}

export default Profile;
