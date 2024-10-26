import Logo from "../assets/assets/logo.svg";
import Ring from "../assets/assets/ring.svg";
import Moon from "../assets/assets/icons/moon.svg";
import ShoppingCart from "../assets/assets/shopping-cart.svg";
import { useContext, useState } from "react";
import Cart from "./Cart";
import { MovieContext } from "../context";
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  return (
    <>
      <header>
        {showCart && <Cart setShowCart={setShowCart} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setShowCart(true)}
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-8px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
