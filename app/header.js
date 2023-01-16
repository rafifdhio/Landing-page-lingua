import Link from "next/link";
import Button from "../components/button";
import LogoIcon from "../components/logo";

function Header() {
  return (
    <header className="w-full fixed mt-[70px]">
      <div className="container justify-between mx-auto flex flex-row items-center">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex flex-row items-center text-lg font-bold"
        >
          <LogoIcon className="mr-3" />
          <span>Lingua</span>
        </Link>

        {/* Menu */}
        <ul className="flex flex-row space-x-6">
          {[
            "Courses",
            "About Us",
            "Teachers",
            "Pricing",
            "Careers",
            "Blog",
          ].map((item, key) => (
            <MenuItem key={key} text={item} href={"/" + item.toLowerCase()} />
          ))}
        </ul>

        {/* Button */}
        <Button size="small" type="secondary">
           Get Started 
        </Button>
      </div>
    </header>
  );
}

const MenuItem = ({ text = "", href = "" }) => (
  <li>
    <Link
      href={href}
      className="px-[10px] py-[6px] text-sm leading-6 font-light"
    >
      {text}
    </Link>
  </li>
);

export default Header;
