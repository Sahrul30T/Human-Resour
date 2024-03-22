import Sidebar from "../../components/Global/sidebar/Index";
import Header from "../../components/Global/header/Index";
import Datakaryawan from "../../components/tabel/Index";

const DataKaryawan = () => {
  return (
    <div>
      <Header />
      <Sidebar>
        <Datakaryawan />
      </Sidebar>
    </div>
  );
};

export default DataKaryawan;
