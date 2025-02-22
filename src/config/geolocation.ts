export async function getCurrentLocation(): Promise<GeolocationCoordinates> {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(position: GeolocationPosition) => {
				console.log(position.coords)

				resolve(position.coords)
			},
			() => {
				reject('Não foi possível obter a localização.')
			}
		)
	})
}