import Sidebar from "../../components/Global/sidebar/Index";
import Header from "../../components/Global/header/Index";
import Rekap from "../../components/rekap/index";

const DataKaryawan = () => {
  return (
    <div>
      <Header />
      <Sidebar>
        <Rekap />
      </Sidebar>
    </div>
  );
};

export default DataKaryawan;
