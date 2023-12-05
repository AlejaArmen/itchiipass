export default function Home() {
  return (
    <>
      {/* Pagina de inicio */}

      <form className="flex flex-col items-center">
        <h2 className="text-6xl py-10 flex max-sm:ml-24 font-medium">
          Bienvenidos Bisontes
        </h2>
        <div className="flex flex-col gap-5 items-center">
          <label htmlFor="code" className="text-3xl">
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
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}
