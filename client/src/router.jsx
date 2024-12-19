import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePokemonPage from "./Pages/ProfilePokemonPage";
import FavoritePage from "./Pages/FavoritePage";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/profilepokemon/:idPokemon",
        element: <ProfilePokemonPage/>
    },
    {
        path: "/favorite",
        element: <FavoritePage/>
    }
])

export default router