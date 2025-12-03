import React from 'react';

const PageTwo: React.FC = () => {
  const sidedWidgetRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (sidedWidgetRef.current) {
      sidedWidgetRef.current.setAttribute('clientid', '1');
      sidedWidgetRef.current.setAttribute('placementid', '551');
      sidedWidgetRef.current.setAttribute('embedfor', 'sequence');
    }
  }, []);

  return (
    <div>
      <h2>Page Two</h2>
      <p>This is the second demo page.</p>
      <div
        className="sided-widget"
        ref={sidedWidgetRef}
      ></div>
    </div>
  );
};

export default PageTwo;
