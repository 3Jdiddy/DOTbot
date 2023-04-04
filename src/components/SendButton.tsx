import React, {useState} from 'react';
import BotMsg from './botMsg';

export default function SendButton(){

    const [items, setItems] = useState([]);

    const handleButtonClick = () => {
    
    };

    return (
      <button className="flex justify-center items-center relative rounded-xl w-[10vw] h-[8vh] right-1" onClick={handleButtonClick}>
        <img
          className="hover:w-[8vw] w-[8.5vw] transition ease-linear duration-700"
          src="/sendButton.png"
        />
      </button>
    );
}
