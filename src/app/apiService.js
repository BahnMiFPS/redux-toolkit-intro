import axios from "axios"

const apiService = axios.create({
	baseURL: "https://localhost:5000/",
})

apiService.interceptors.request.use(
	(request) => {
		console.log("Start request", request)
		return request
	},
	function (error) {
		console.log("Request error", error)
		return Promise.reject(error)
	}
)

apiService.interceptors.response.use(
	(response) => {
		console.log("Response", response)
		return response
	},
	function (error) {
		console.log("Response error", error)
		return Promise.reject(error)
	}
)

export default apiService
