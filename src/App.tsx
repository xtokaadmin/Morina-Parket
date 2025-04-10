import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import tempoRoutes from "tempo-routes";
import { Toaster } from "./components/ui/toaster";

function App() {
  const appRoutes = useRoutes(routes);
  const tempoAppRoutes = import.meta.env.VITE_TEMPO === "true" ? useRoutes(tempoRoutes) : null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {appRoutes}
        {tempoAppRoutes}
        <Toaster />
      </>
    </Suspense>
  );
}

export default App;
