import MapScreen from '../components/MapScreen'
import Destination from '../components/Destination'

export default ({ content, callback }) => {

    return <>
        <section className="w-screen h-screen">
            <section className="w-full h-12 px-5 flex items-center justify-around" style={{ backgroundColor: '#006D9B' }}>
                {content && <h1 className="absolute top-3 left-4 font-bold text-white" onClick={() => callback(null)}>Atras</h1>} <p className="font-bold text-2xl text-white">App Distribuidor</p>
            </section>
            <section className="w-full h-full flex flex-col justify-center items-center" style={{ backgroundColor: 'rgb(147 212 239)' }}>
                {content ? <Destination /> : <MapScreen callback={callback} />}
            </section>
        </section>
    </>
}