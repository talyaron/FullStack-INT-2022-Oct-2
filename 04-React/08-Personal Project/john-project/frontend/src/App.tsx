import { useState, useEffect } from "react";
import "./App.css";
import { Auth } from "./pages/Auth";
import { AppRouter } from "./routes/AppRouter";
import { Header } from "./components/Header";
import { useCookies } from 'react-cookie';

function App() {
	const [isConnected, setIsConnected] = useState(false);
	const [cookies] = useCookies();


  	useEffect(() => {	
    	if(cookies?.user){
			onConnected()
		}
    }, [cookies])

	const onConnected = () => setIsConnected(true);

	return isConnected ? (
		<div className="app-wrapper">
      		<Header />
			<AppRouter />
		</div>
	) : (
		<Auth onConnected={onConnected} />
	);
}

export default App;
