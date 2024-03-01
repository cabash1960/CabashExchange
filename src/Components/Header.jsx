import React from "react";
import Avatar from "react-avatar";

function Header() {
  return (
    <div className="py-2 px-6 bg-slate-200 flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button
        type="button"
        className="text-lg text-gray-900 font-semibold sidebar-toggle"
      >
        <i className="ri-menu-line"></i>
      </button>

      <ul className="ml-auto flex items-center">
        <li className="dropdown ml-3">
          <button type="button" className="dropdown-toggle flex items-center">
            <div className="flex-shrink-0 w-10 h-10 relative">
              <Avatar
                src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                name="John Doe"
                size={40}
                round={true}
              />
            </div>
            <div className="p-2 md:block text-left">
              <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
