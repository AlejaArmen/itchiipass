import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Pagina de inicio */}
      <form className="flex flex-col items-center">
        <h2 className="text-6xl py-10 flex ml-8 font-medium">
          Bienvenidos Bisontes
        </h2>
        <div className="flex flex-col gap-5 items-center">
          <label htmlFor="code" className="text-3xl ml-8">
            Ingresa codigo de evento aquí
          </label>

          <input
            id="code"
            placeholder="Enter your code here"
            required
            className="bg-primary text-2xl py-3 pl-4 rounded-lg border-2 border-black"
          />

          <button
            className="w-1/2 mt-4 bg-gray rounded-full py-2 hover:bg-hoverColor text-2xl"
            type="submit"
          >
            Confirmar
          </button>
        </div>

        <Link href="/eventos" className="no-underline flex mt-24 bg-yelow p-4 rounded-3xl">
          <h1 className="bg-transparent text-primary mr-4">Ver eventos </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="#F0ECE5"
            className="w-6 h-6 bg-transparent self-center"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </form>
    </>
  );
}
