import { useState } from 'react';

function MyComponent() {
  const [output, setOutput] = useState('');

  const handleClick = async () => {
    const response = await fetch('/api/my-api');
    const data = await response.json();
    setOutput(data.output);
  };

  return (
    <div>
      <button onClick={handleClick}>Run Python script</button>
      <p>{output}</p>
    </div>
  );
}
