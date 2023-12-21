import React from 'react';

function Chip({ name } : {name: string}) {
  return (
    <div className="bg-gray-700 w-fit px-3 py-1 rounded-full text-white text-sm hover:scale-110 transition shadow-lg cursor-pointer">
      {name}
    </div>
  );
}

export default Chip;
