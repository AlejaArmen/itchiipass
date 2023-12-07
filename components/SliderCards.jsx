import React, { useState } from "react";
const escolarEvents = [
  {
    title: "Concurso de catrinas",
    description: "Concurso de catrinas, del TECNM campus Chihuahua II",
    date: "01-11-2023",
    time: "11:00",
    place: "Gimnasio del TEC II",
    image: "/catrinas.jpg",
    id: 2,
  },
  {
    title:
      "35° Aniversario del Ballet Folklórico del Tecnológico de Chihuahua II",
    description:
      "Presentación del grupo de Danza Moderna, Teatro y Canto del TECNM campus Chihuahua II, en el Teatro de la Ciudad por el 35° Aniversario del Ballet Folklórico del Tecnológico de Chihuahua II",
    date: "27-11-2023",
    time: "20:00",
    place: "Teatro de la ciudad",
    image: "/danza-dos.jpg",
    id: 3,
  },
  {
    title: "Jornada académicas 2023",
    description:
      "Semana académica del Tecnológico de Chihuahua II, durante una semana los alumnos del TEC II podrán asistir a conferencias, talleres y mas.",
    date: "13 al 17-11-2023",
    time: "8:00-19:00",
    place: "TecNM campus Chihuahua II",
    image: "/evento1.png",
    id: 4,
  },
  {
    title: "Proyectos de final de semestre",
    description:
      "Durante una semana, distintas carreras presentan los proyectos que realizaron durante el semestre, en el TEC II.",
    date: "29-10-2023",
    time: "11:00",
    place: "Gimnasio del TEC II",
    image: "/proyectos-junio-dic.jpg",
    id: 5,
  },
  {
    title: "25° Jornada de Residencias Profesionales",
    description:
      "Distintas empresas presentan sus proyectos para que los alumnos puedan realizar sus residencias profesionales en ellas.",
    date: "17-11-2023",
    time: "9:00",
    place: "Gimnasio del TEC II",
    image: "/residencias.jpg",
    id: 6,
  },
  {
    title: "Ponte la camiseta",
    description:
      "Ponte la camiseta, es un evento que se realiza en el TEC II, donde los alumnos de nuevo ingreso, se les da la bienvenida al TEC II, y se les da una platica de bienvenida, y se les entrega una playera del TEC II.",
    date: "11-09-2023",
    time: "10:00",
    place: "Gimnasio del TEC II",
    image: "/camiseta.jpg",
    id: 7,
  },
  {
    title: "Representativo de teatro",
    description:
      "Presentación de final de semestre del grupo de teatro del TEC II, en el auditorio del TEC II.",
    date: "29-11-2023",
    time: "16:00",
    place: "Auditorio del TEC II",
    image: "/teatro.jpg",
    id: 8,
  },
];


export default function CardSlides() {
  const [asistiendo, setAsistiendo] = useState(Array(escolarEvents.length).fill(false));
  
  const toggleAsistencia = (index) => {
    const newAsistencias = [...asistiendo];
    newAsistencias[index] = !newAsistencias[index];
    setAsistiendo(newAsistencias);
  };
    
  return (
    <>
      <div className="flex mobile:flex-col">
        {escolarEvents.map((evento, index) => (
          <div
            key={index}
            className="flex flex-col gap- border-dashed border-white rounded-3xl p-4 laptop:mx-72 laptop:p-12 mobile:m-8 bg-gray-800"          >
            <h3 className="text-primary text-3xl font-bold mb-2 laptop:text-center">
              {evento.title}
            </h3>
            <img
              className="w-72 h-40 laptop:w-96 laptop:pb-8 laptop:h-auto my-4 rounded-lg self-center"
              src={evento.image}
              alt={evento.title}
            />
            <p className="text-primary text-lg mb-2">Día: {evento.date}</p>
            <p className="text-primary text-lg mb-2">Hóra: {evento.time}</p>
            <p className="text-primary text-lg mb-2">Lugar: {evento.place}</p>
            <p className="text-primary text-lg mb-2">Descripción: {evento.description}</p>
            <button
              onClick={() => toggleAsistencia(index)}
              className={`bg-${asistiendo[index] ? 'failed' : 'successbtn'} hover:bg-deepGray text-2xl w-auto self-center m-3 p-3 rounded-2xl border-none`}
            >
              {asistiendo[index] ? 'Cancelar' : 'Registrarse'}
            </button>
          </div>
        ))}
      </div>
      

    </>
  );
}
