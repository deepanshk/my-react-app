import React, { useRef, useEffect } from "react";

const PageOne: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute("debateid", "64253");
    }
  }, []);

  return (
    <div>
      <h2>Page One</h2>
      <div className="sided-widget" ref={widgetRef}></div>
      <p>This is the first demo page.</p>
    </div>
  );
};

export default PageOne;
