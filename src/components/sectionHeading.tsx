import React from 'react';

function SectionHeading({ title } : { title : string}) {
  return (
    <h1 className="font-bold text-3xl p-4">{title}</h1>
  );
}

export default SectionHeading;
