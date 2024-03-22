import { Link } from 'react-router-dom';



const Sidebar = ({children}) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-blue-500 p-4 ">
        <div className="text-white text-xl font-bold mb-4" > </div>
        <div className="space-y-2">
          <Link to="/home" className="block w-full p-2 rounded text-white bg-blue-700 hover:bg-blue-600">
            Home
          </Link>
          <Link to="/absen" className="block w-full p-2 rounded text-white bg-blue-700 hover:bg-blue-600">
            Absen
          </Link>
          <Link to="/tabel" className="block w-full p-2 rounded text-white bg-blue-700 hover:bg-blue-600">
            Info Karyawan
          </Link>
          <Link to="/rekap" className="block w-full p-2 rounded text-white bg-blue-700 hover:bg-blue-600">
            Rekap Absen
          </Link>
        </div>
      </div>

     <div className='w-4/5'>
        {children}
     </div>

    </div>
  );
};


export default Sidebar;
