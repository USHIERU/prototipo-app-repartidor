import { useEffect, useState } from "react"

export default () => {
    const [initCount, setInitCount] = useState(false)
    const [min, setMin] = useState(30)
    const [sec, setSec] = useState(0)

    useEffect(() => {
        let interval
        interval = setInterval(() => {
            if (initCount) {
                if (sec === 0) {
                    setSec(59)
                    setMin(val => val - 1)
                } else {
                    setSec(val => val - 1)
                }
            } else {
                clearInterval(interval)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [initCount, min, sec])

    const counterStyle = {
        animation: 'spin 2s linear infinite',
        WebkitAnimation: 'spin 2s linear infinite'
    }

    return <>
        <p className="text-white font-bold text-xl text-center bg-blue-900 py-2 w-screen">Llegaste a tu destino</p>
        <p className="text-gray-900 font-bold text-xl mt-20 py-2 ml-5 w-screen">Tiempo de entrega:</p>
        <section className="my-10 relative">
            <div className="loader" style={initCount ? counterStyle : {}}></div>
            <p style={{ top: '30vw', left: '20vw' }} className="absolute text-blue-800 font-bold text-5xl">{min}:{sec < 10 ? '0' + sec : sec}</p>
        </section>
        <button className="rounded border border-gray-800 bg-blue-800 py-2 px-4 inline-block text-white font-bold text-lg w-min" onClick={() => setInitCount(val => !val)}>{initCount ? 'Terminar' : 'Iniciar'}</button>
    </>
}