import React, { Suspense, useState } from "react";
import Comments from "./sub-comp/Comments";
import Photos from "./sub-comp/Photos";
import Tabs from "./sub-comp/Tabs";

function AvoidFallback() {
  const [tab, setTab] = useState("photos");

  const tabChange = (v) => {
    setTab(v);
  };

  return (
    <div>
      <Tabs tabs={["Photos", "Comments"]} tabChange={tabChange} />
      <Suspense fallback={<div>Loading...</div>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
}

export default AvoidFallback;
