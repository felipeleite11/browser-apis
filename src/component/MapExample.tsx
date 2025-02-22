'use client'

// EXEMPLOS
// https://codesandbox.io/p/sandbox/react-leaflet-draw-example-j3gw4?file=%2Fsrc%2FApp.jsx%3A26%2C12-26%2C29
// https://codesandbox.io/p/sandbox/react-leaflet-s1q44?file=%2Fsrc%2Findex.js
// https://codesandbox.io/p/sandbox/react-leaflet-map-forked-2w75lx?file=%2Fsrc%2FApp.js%3A25%2C2

import L, { LatLngTuple } from "leaflet"
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet"

interface MapExampleProps {
	position: LatLngTuple
}

const markerIcon: L.Icon = new L.Icon({
    iconUrl: 'marker-icon.png',
    iconSize: new L.Point(40, 40)
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
