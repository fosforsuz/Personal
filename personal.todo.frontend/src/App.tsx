import { Route, Routes } from "react-router-dom"
import { v4 } from "uuid";
import appRoutes from "./routes/appRoutes"
import Layout from "./layout/Layout";

function App() {

  const routes = appRoutes.map(route => <Route key={v4()} path={route.path} element={route.element} />)

  return (
    <Layout>
      <Routes>
        {routes}
      </Routes>
    </Layout>
  )
}

export default App
