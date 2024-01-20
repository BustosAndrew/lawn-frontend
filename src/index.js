import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Dashboard } from "./routes/dashboard"
import { Upload } from "./routes/upload"
import { Results } from "./routes/results"

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
				path: "/upload",
				element: <Upload />,
			},
			{
				path: "/results",
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
	<ChakraProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ChakraProvider>
)
