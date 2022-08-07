import React, { Component, Suspense } from "react";
const LazyLoadComp = React.lazy(() => import("./LazyLoadComp"));

class BasicLazyLoad extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadComp />
        </Suspense>
      </div>
    );
  }
}

export default BasicLazyLoad;
