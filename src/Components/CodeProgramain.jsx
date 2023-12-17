import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

export const CodeProgramain = () => {
  const [text, setText] = useState('');
  const paragraph = "Este es un párrafo de ejemplo.";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => prevText + paragraph[index]);
      index++;

      if (index === paragraph.length) {
        clearInterval(intervalId);
        setTimeout(intervalId,5000)
      }
    }, 100); // Ajusta el valor del intervalo según tus preferencias

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h2>{text}</h2>

    </div>
  )
}
