import { useRouteError } from "react-router-dom";

// Error obyektining turini aniqlash uchun interface
interface ErrorResponse extends Response {
	status: number;
}

function PageError() {
	const error = useRouteError() as ErrorResponse | Error;

	console.log("Error object:", error); // Xato obyektini konsolda tekshirish

	if (error instanceof Response) {
		// Agar xato Response obyekti bo'lsa
		if (error.status === 404) {
			return <div>Page not found</div>;
		}
		return <div>Response error with status: {error.status}</div>;
	}

	if (error instanceof Error) {
		// Agar xato Error obyekti bo'lsa
		return <div>Error: {error.message}</div>;
	}

	// Boshqa holatlarda
	return <div>Unknown error occurred</div>;
}

export default PageError;
