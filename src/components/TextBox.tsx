import React, { useState } from 'react';

export default function TextBox() {
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input className='relative w-[50vw] left-1 outline-none' type="text" value={text} onChange={handleTextChange}/>
    </div>
  );
}


