import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="max-w-screen">
      <div className="flex justify-center items-center bg-TK-background text-white h-[60px]">
        <div className="flex items-center justify-center m-4">
          <Link to={'/'}>
            <div className="flex px-10">
              <div className="mt-7 md:text-2xl sm:text-sm font-bold">Home</div>
            </div>
          </Link>
          <Link to={'/task3/subpage'}>
            <div className="flex px-10">
              <div className="mt-7 md:text-2xl sm:text-sm font-bold">Subpage</div>
            </div>
          </Link>
          <Link to={'/task3/counter'}>
            <div className="flex px-10">
              <div className="mt-7 md:text-2xl sm:text-sm font-bold">Counter</div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
