'use client'

import React, {useState} from "react";

export default function HomeButton(){
    const [showInput, setShowInput] = useState(false);
    const [eventCode, setEventCode] = useState('');

    const handleButtonClick = ()=>{
        setShowInput(true);
    };

    const handleConfirmClick = () => {
        console.log('Codigo del evento: ', eventCode);
    }




    return ( <div>
      <button
        className="bg-blue-500 text-white p-4 rounded-md"
        onClick={handleButtonClick}
      >
        Confirmar Asistencia
      </button>
      {showInput && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Ingrese el código del evento"
            className="border p-2"
            value={eventCode}
            onChange={(e) => setEventCode(e.target.value)}
          />
          <button
            className="bg-green-500 text-white p-2 rounded-md ml-2"
            onClick={handleConfirmClick}
          >
            Confirmar
          </button>
        </div>
      )}
    </div>
  );
}