import { TileLayer, MapContainer, Marker,  } from 'react-leaflet'
import MarkerIcon from './MarkerIcon'
import 'leaflet/dist/leaflet.css'
import '../isMobile.css'

export default ({ callback }) => {
    const position = [20.681933, -103.3487381]

    return <>
        <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={MarkerIcon} />
        </MapContainer>
        <section onClick={() => callback(true)} style={{ zIndex: '999' }} className="border-4 border-gray-700 bg-white rounded-md w-screen py-3 absolute bottom-10">
            <p className="m-auto text-center font-bold text-xl">Llegué a mi destino</p>
        </section>
    </>
}