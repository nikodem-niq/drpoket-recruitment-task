import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="min-w-[1000px]">
      <div className="flex justify-center items-center bg-TK-background text-white h-[60px]">
        <div className="flex items-center justify-center m-4">
          <Link to={'/'}>
            <div className="flex px-10">
              <div className="mt-7 text-2xl font-bold">Home</div>
            </div>
          </Link>
          <Link to={'/task3/subpage'}>
            <div className="flex px-10">
              <div className="mt-7 text-2xl font-bold">Subpage</div>
            </div>
          </Link>
          <Link to={'/task3/counter'}>
            <div className="flex px-10">
              <div className="mt-7 text-2xl font-bold">Counter</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
