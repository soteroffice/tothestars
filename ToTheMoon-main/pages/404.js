import React, { useEffect } from "react";

function _404(props) {
  useEffect(() => {
    window.location.assign("/");
  });
  return <></>;
}

export default _404;
