import Links from "./Links";
import Icons from "./Icons";
import Search from "./Search";

interface NavbarProps {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({
  viewCart,
  setViewCart,
}: NavbarProps) => {
  return (
    <nav className="navBar">
      <Links setViewCart={setViewCart}/>
      <h3>Online-Shop</h3>
      <Search /> 
      <Icons
        viewCart={viewCart}
        setViewCart={setViewCart}
      />
    </nav>
  );
};

export default Navbar;
