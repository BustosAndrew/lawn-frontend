import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Dashboard } from "./routes/dashboard"
import { Upload } from "./routes/upload"
import { Results } from "./routes/results"
import { FirebaseProvider } from "./components/FirebaseProvider"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
			{
				path: "/upload/:url?",
				element: <Upload />,
			},
			{
				path: "/results/:url",
				element: <Results />,
			},
			{
				path: "*",
				element: <div>404</div>,
			},
		],
	},
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<FirebaseProvider>
		<ChakraProvider>
			<React.StrictMode>
				<RouterProvider router={router} />
			</React.StrictMode>
		</ChakraProvider>
	</FirebaseProvider>
)
