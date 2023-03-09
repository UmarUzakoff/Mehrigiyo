import { Layout } from "./components";
import { HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";
import Mahsulotlar from "./pages/Home/_pages/Mahsulotlar/Mahsulotlar";
import { Loading, Error } from "./components";
import SevimliDorilar from "./pages/SevimliDorilar/SevimliDorilar";
import Savatcha from "./pages/Savatcha/Savatcha";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Mahsulotlar" element={<Mahsulotlar />} />
          <Route path="/SevimliDorilar" element={<SevimliDorilar />} />
          <Route path="/Savatcha" element={<Savatcha />} />
        </Routes>
      </Layout>
      <Loading />
      <Error />
    </>
  );
};
// }

export default App;
