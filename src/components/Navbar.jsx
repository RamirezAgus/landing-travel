import logo from "@assets/logo.webp";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="py-4 relative sm:px-16 px-4 flex justify-center">
      <div className="absolute w-[50%] inset-0" />
      <div className="flex justify-between items-center w-full 2xl:max-w-[1280px]">
      <div className=""/>
        <img
          src={logo}
          alt="logo"
          className="object-contain w-[150px] h-[100px]"
        />
        <CgMenuRight size={32} className="cursor-pointer text-blue"/>
      </div>
    </nav>
  );
};

export default Navbar;
