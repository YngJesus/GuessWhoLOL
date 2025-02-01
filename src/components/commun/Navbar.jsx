import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "How To Play", href: "/HowToPlay" },
  { name: "About", href: "/AboutPage" },
  { name: "Editions", href: "/ComingSoon" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center">
                <div className="flex shrink-0 items-center">
                  <Link to="/">
                    <img
                      alt="Your Company"
                      src="/img/Logo.png"
                      className="h-20 w-auto rounded-full cursor-pointer transform hover:rotate-12 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block ml-40 p-4">
                  <div className="custom-navbar flex flex-row gap-32">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          px-3 py-2 rounded-md text-2xl font-medium
                          transition-all duration-300 ease-in-out
                          transform hover:scale-110 hover:rotate-3
                          relative overflow-hidden
                          ${
                            location.pathname === item.href
                              ? "text-yellow-300 font-bold"
                              : "text-gray-300 hover:text-white"
                          }
                        `}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-25 transition-opacity duration-300"></span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={`
                    block rounded-md px-3 py-2 text-base font-medium
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105 hover:rotate-2
                    ${
                      location.pathname === item.href
                        ? "text-yellow-300 bg-gray-900 font-bold"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
