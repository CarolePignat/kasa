import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Accommodation from './Pages/Accommodation/Accommodation';
import Error from './Pages/Error/Error';


// INITIALISATION DES ROUTES DANS UN TABLEAU
// "Path": Indication du chemin
// "Element": Indication du composant
const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/accommodation/:id",
    element: <Accommodation />
  },
  {
    // "*": si URL erronée ou inexistante, l'utilisateur sera redirigé vers la page "Error"
    path: "*",
    element: <Error />
  }

]);


// "RouterProvider" englobe toutes les routes du router
// -> Affichage de l'app
function App() {

  return (

    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;