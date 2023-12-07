import Link from "next/link";

export default function RegistroPage() {
  return (
    <div className="flex flex-col items-center pt-28 laptop:pt-16">
      <form className="flex flex-col bg-primary rounded-3xl border-none shadow-md shadow-deepGray items-center p-4 desktop:w-96 laptop:p-12 desktop:p-16 gap-4 ">
        <h1 className="bg-transparent text-deepGray text-5xl">Registro</h1>
        <label htmlFor="" className="bg-transparent text-deepGray text-3xl">Numero de control</label>
        <input type="text" placeholder="#Control"  className="desktop:w-96 desktop:text-center text-xl p-2 border-none rounded-xl text-center"/>
        <Link href="/registro/consultas" className="rounded-2xl border-none shadow-md hover:bg-hoverColor bg-yelow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-6 h-6 p-4 bg-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Link>
      </form>
    </div>
  );
}
