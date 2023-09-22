import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="min-w-[1000px]">
      <div className="flex justify-center items-center bg-TK-background text-white h-[60px]">
        <div className="flex items-center justify-center m-4">
          <Link to={'/'}>
            <div className="flex px-10 py-5">
              <div className="text-2xl font-bold">Home</div>
            </div>
          </Link>
          <Link to={'/my-path'}>
            <div className="flex px-10 py-5">
              <div className="text-2xl font-bold">My path</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
