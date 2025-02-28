'use client'

import L, { LatLngTuple } from "leaflet"
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet"
import markerImage from '@/assets/leaflet/images/marker-icon.png'

interface MapExampleProps {
	position: LatLngTuple
}

const markerIcon: L.Icon = new L.Icon({
    iconUrl: markerImage.src,
    iconSize: new L.Point(25, 40)
})

export function MapExample({ position }: MapExampleProps) {
	return (
		<MapContainer
			center={position}
			zoom={16}
			scrollWheelZoom
			className="leaflet-container"
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker position={position} icon={markerIcon}>
				<Popup>
					Você está aqui!
				</Popup>
			</Marker>
		</MapContainer>
	)
}
