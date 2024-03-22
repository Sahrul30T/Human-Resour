import Dasboard from "../../components/Global/dasboard/index"
import Sidebar from "../../components/Global/sidebar/Index";
import Header from "../../components/Global/header/Index";

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar>
        <Dasboard/>
      </Sidebar>
    </div>
  );
};

export default App;
