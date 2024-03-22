import Sidebar from "../../components/Global/sidebar/Index";
import Header from "../../components/Global/header/Index";
import Absen from "../../components/Absen/Index";

const AbsenPage = () => {
  return (
    <div>
      <Header />
      <Sidebar > 
            <Absen />
      </Sidebar>
      
    </div>
  );
};

export default AbsenPage;
