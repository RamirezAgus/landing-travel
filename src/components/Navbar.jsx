import logo from "@assets/logo.webp";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="py-4 relative sm:px-16 px-4 flex justify-center">
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="flex justify-between items-center w-full 2xl:max-w-[1280px]">
      <div className=""/>
        <img
          src={logo}
          alt="logo"
          className="object-contain w-[200px] h-[132px]"
        />
        <CgMenuRight size={32} className="cursor-pointer"/>
      </div>
    </nav>
  );
};

export default Navbar;
