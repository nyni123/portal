const navLinkClasses =
  "flex flex-col items-center justify-center w-fit p-1 py-1 text-xs font-normal text-center text-white rounded hover:bg-[#34345c] transition duration-300 no-underline md:text-xs";

export default function NavItems({ link, children }) {
  return (
    <a href={link} className={navLinkClasses}>
      {children}
    </a>
  );
}
