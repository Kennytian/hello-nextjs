import React from 'react';
import cowsay from 'cowsay-browser';

const CowSayHi = () => {
  return (
    <div>
      <pre>{cowsay.say({ text: 'hi there!' })}</pre>
      <pre>{cowsay.think({ text: 'hi there!' })}</pre>
    </div>
  );
};

export default CowSayHi;
