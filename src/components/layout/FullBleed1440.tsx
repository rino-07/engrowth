import React from 'react';

interface FullBleed1440Props {
  children: React.ReactNode;
  className?: string;
}

const FullBleed1440: React.FC<FullBleed1440Props> = ({
  children,
  className = ''
}) => {
  // 親の max-w-* を抜けて100vwまで広げ、内側で1440px上限に戻す
  return (
    <section className={`relative isolate left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${className}`}>
      <div className="mx-auto max-w-[1440px] px-6">
        {children}
      </div>
    </section>
  );
};

export default FullBleed1440;

