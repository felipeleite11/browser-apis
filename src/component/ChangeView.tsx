'use client'

import { LatLngExpression } from "leaflet"
import { useEffect } from "react"
import { useMap } from "react-leaflet"

export function ChangeView({ center }: { center: LatLngExpression }) {
	const map = useMap()

	useEffect(() => {
		map.setView(center, map.getZoom())
	}, [center, map])

	return null
}