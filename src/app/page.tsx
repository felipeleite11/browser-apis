'use client'

import { useState } from "react"
import toast from "react-hot-toast"
import Image from "next/image"

import { getCurrentLocation } from "@/config/geolocation"
import { notify } from "@/config/notification"
import { MapExample } from "@/component/MapExample"

import '@/assets/leaflet/leaflet'
import "@/assets/leaflet/leaflet.css"
import searchIcon from '@/assets/search.svg'

export default function Home() {
	const [location, setLocation] = useState<Partial<GeolocationCoordinates> | null>(null)
	const [isSearchingLocation, setIsSearchingLocation] = useState(false)

	const isWindowAvailable = typeof window !== 'undefined'

	function handleNotify() {
		notify({
			title: `Felipe diz:`,
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		})
	}

	async function handleGetGeolocation() {
		try {
			setIsSearchingLocation(true)

			const position = await getCurrentLocation()

			setLocation(position)
		} catch (e) {
			toast.error((e as Error).message)
		} finally {
			setIsSearchingLocation(false)
		}
	}

	async function handleCopyToClipboard() {
		if (isWindowAvailable) {
			const text = "Olá, mundo!"

			const item = new ClipboardItem({
				'text/plain': new Blob([text], { type: 'text/plain' })
			})

			await navigator.clipboard.write([item])
		}
	}

	return (
		<div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<button onClick={handleNotify} className="p-3 rounded-md bg-white text-gray-800 outline-none hover:opacity-80">Notification API</button>

			<button onClick={handleGetGeolocation} className="p-3 rounded-md bg-white text-gray-800 outline-none hover:opacity-80">Geolocation API</button>

			{isSearchingLocation ? (
				<div className="flex flex-col gap-1 items-center">
					<Image
						alt="" 
						src={searchIcon}
						height={64}
						width={64}
					/>

					<span>Buscando localização...</span>
				</div>
			) : location ? (
				<div className="w-[600px] flex flex-col gap-2">
					<p>Latitude: {location.latitude}</p>
					<p>Longitude: {location.longitude}</p>

					<MapExample 
						position={[location.latitude!, location.longitude!]} 
					/>
				</div>
			) : null}

			<button onClick={handleCopyToClipboard} className="p-3 rounded-md bg-white text-gray-800 outline-none hover:opacity-80">Clipboard API</button>
		</div>
	)
}
