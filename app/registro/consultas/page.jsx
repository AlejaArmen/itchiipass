import Link from "next/link";

const users = [
  {
    nombre: "Joaquin Alejandro Lopez Soto",
    carrera: "Ing. Informática",
    semestre: "4",
    correo: "L19551501@chihuahua2.tecnm.mx",
    ncontrol: "19551501",
  },
]
export default function ConsultasPage() {
  return (
    <div className="flex flex-col items-center pt-16 laptop:pt-8 mobile:pt-1">
    {users.map((user, index) => (

      <form key={index} className="flex flex-col bg-primary rounded-3xl border-none shadow-md  shadow-deepGray items-start laptop:items-center laptop:flex-wrap laptop:px-36  p-4 gap-4 ">
        <h1 className="bg-transparent text-deepGray text-5xl mobile:text-3xl">Registro</h1>
        <label htmlFor="" className="bg-transparent text-deepGray text-3xl mobile:text-2xl">
          Bienvenido {user.ncontrol}
        </label>
        <label htmlFor="" className="bg-transparent text-deepGray text-2xl mobile:text-xl">
          Verifica tus datos
        </label>
        <label htmlFor="" className="bg-transparent text-deepGray text-2xl mobile:text-lg">
          Nombre:
        </label>
        <label
          placeholder="Nombre(s)"
          className="desktop:w-96 desktop:text-center text-xl p-2 border-none rounded-xl text-center"
        >{user.nombre}</label>
        <label htmlFor="" className="bg-transparent text-deepGray text-2xl mobile:text-lg">
          Carrera:
        </label>
        <label
          placeholder="Carrera"
          className="desktop:w-96 desktop:text-center text-xl p-2 border-none rounded-xl text-center px-16 "
        >{user.carrera}</label>
        <label htmlFor="" className="bg-transparent text-deepGray text-2xl mobile:text-lg">
          Semestre:
        </label>
        <label
          placeholder="Numero de semestre"
          className="desktop:w-96 desktop:text-center text-xl p-2 border-none rounded-xl laptop:px-16 px-16 text-center"
        >{user.semestre}</label>
        <label htmlFor="" className="bg-transparent text-deepGray text-2xl mobile:text-lg">
            Correo:
        </label>
        <label
          placeholder="#Control@chihuahua2.tecnm.mx"
          className="desktop:w-96 desktop:text-center text-xl p-2 border-none rounded-xl text-center"
        >{user.correo}</label>
        <Link
          href="/home"
          className="rounded-2xl border-none shadow-md hover:bg-hoverColor bg-successbtn self-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 p-3 bg-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </Link>
      </form>

    ))}
    </div>
  );
}

