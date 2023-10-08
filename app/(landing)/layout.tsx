import React from 'react';

const LayoutLanding = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="h-screen bg-[url('https://images.pexels.com/photos/7083128/pexels-photo-7083128.jpeg')] bg-cover overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full bg-hero-pattern">
          {children}
        </div>
      </main>
    </>
  );
};

export default LayoutLanding;
