'use client'

import { toast } from "react-hot-toast"

interface NotificationProps {
	title?: string
	content: string
}

async function init() {
	const permission = await Notification.requestPermission()

	if(permission !== 'granted') {
		throw new Error('Permissão negada para notificações!')
	}
}

try {
	init()
} catch(e) {
	console.log((e as Error).message)
}

export function notify({ title = 'Notification', content }: NotificationProps) {
	const isWindowAvailable = typeof window !== 'undefined'

	if(isWindowAvailable) {
		if(Notification.permission === 'granted') {
			const notification = new Notification(title, { 
				body: content, 
				icon: 'favicon.png',
				requireInteraction: true
			})

			notification.onclick = () => {
				toast('Notification was clicked!', {
					position: 'bottom-center'
				})
			}
		} else {
			toast(content, { 
				duration: 5000,
				style: {
					backgroundColor: '#ffeb3b'
				}
			})
		}
	}
}