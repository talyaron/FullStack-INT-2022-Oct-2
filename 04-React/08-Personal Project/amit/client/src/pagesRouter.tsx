
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Home from "./pages/Home.tsx";
import Theatre from "./pages/Theatre.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home/> },
            { path: "about", element: <About/> },
            { path: "contactUs", element: <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugiat repellendus rem recusandae, fuga iste, quisquam tenetur beatae doloremque ipsam rerum, magnam nisi magni hic eligendi. Autem cum dolores vero.</h2> },
            { path: "faq", element: <h2>faq</h2> },
            { path: "login", element: <Login/> },
            { path: "register", element: <Register/> },
            { path: "theatre/:movieId", element: <Theatre/> },
        ],
        errorElement: <NotFoundPage />
    },

    {
        path: "/about",
        element: <About />,
    },
])

