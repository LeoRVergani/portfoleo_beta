import Cabecalho from "../shared/Cabecalho";

export default function Principal() {
    return (
        <div className="flex flex-col items-center h-[500px]
        bg-[url('/principal.jpg')] bg-cover bg-center">
            <Cabecalho />
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="flex gap-3 items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="text-3xl sm:text-5xl font-bold text-center">
                        Leonardo Vergani
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </h1>
                
                <h2 className="text-zinc-500">Engenheiro de Software</h2>
            </div>
        </div>
    )
}