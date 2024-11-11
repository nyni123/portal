import logo from "../assets/logo.png";
import pulse from "../assets/pulse.png";
import contributions from "../assets/contributions.png";
import Button from "./Button";

export default function ProfileCard({user}) {
  return (
    <div className="flex sm:flex-col xl:flex-row bg-white gap-4 justify-evenly items-center rounded-lg shadow-lg w-full max-w-md p-4">
      <section className="flex-shrink-0">
        <img
          src={user?.email === "jShah@zktecowfm.com" ? "https://www.zktechnology.com/wp-content/uploads/2018/04/gray-green.svg" : logo}
          alt="Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 xl:w-16 xl:h-16 object-contain"
        />
      </section>

      <section className="flex lg:flex-col flex-col gap-4 justify-around w-full">
        <div className="flex flex-col 2xl:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <h1 className="text-lg font-semibold text-gray-700">{user ? `${user.firstName} ${user.lastName}` : "STATUSONE"}</h1>
          <Button className="text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
            Profile
          </Button>
        </div>

        <ul className="flex flex-col gap-4 2xl:flex-row">
          <li className="flex items-center gap-2 md:flex-col">
            <img
              src={pulse}
              alt="Pulse Count"
              className="w-5 h-5 sm:w-4 sm:h-4 "
            />
            <p className="text-gray-600 xl:text-base text-sm sm:text-xs 2xl:text-base text-nowrap">
              0 pulses
            </p>
          </li>
          <li className="flex items-center gap-2 md:flex-col">
            <img
              src={contributions}
              alt="Contributions"
              className="w-5 h-5 sm:w-4 sm:h-4 "
            />
            <p className="text-gray-600 xl:text-base sm:text-xs text-sm 2xl:text-base text-nowrap">
              0 contributions
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
