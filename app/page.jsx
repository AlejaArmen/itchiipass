
export default function Home(){
  return(
    <>
    <div className="flex flex-col items-center pt-64">
        <h1 className="text-6xl font-bold mb-4">Bienvenidos Bisontes</h1>
        <div>

        <input type="text" className="bg-primary p-2 rounded-lg mb-4 text-2xl" placeholder="Introduce codigo" />
        </div>
        <div>

        <button className="bg-cardBackground text-3xl m-4 p-4 rounded-2xl hover:bg-successbtn">Ingresar</button>
        </div>
      </div>
    </>
  )
}