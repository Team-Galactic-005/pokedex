import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePokemonPage from "./Pages/ProfilePokemonPage";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/profilepokemon/:idPokemon",
        element: <ProfilePokemonPage/>
    }
])

export default router