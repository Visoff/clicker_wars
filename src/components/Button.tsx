import React, { useState } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text}) => {
    const [count, setCount] = useState<number>(0);
  return (
    <button onClick={()=>setCount(count+1)}>
      {text} - {count}
    </button>
  );
};

export default Button;
