<<<<<<< HEAD
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className = "text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className = "text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className = "py-3">
          <h2 className = "text-primary">Todas vendas</h2>

        </div>

      <DataTable />
      </div>
      <Footer />
    </>
=======
function App() {
  return (
    <div>
      <h1>Olá mundo!</h1>
    </div>
>>>>>>> 78604e53b7798a91453e7173a0e71d6670576eb0
  );
}

export default App;
