
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/home") {
      return currentPath === "/home";
    }
    // For paths like /racing/123, make the racing nav item active
    if (path === "/racing") {
      return currentPath.startsWith("/racing");
    }
    return currentPath === path;
  };

  const navItems = [
    {
      label: "Home",
      path: "/home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      label: "Racing",
      path: "/racing",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 15H5l4-8"></path>
          <path d="M14 15v2c0 1-1 2-2 2h-1"></path>
          <path d="M5 15v2c0 1 1 2 2 2h1"></path>
        </svg>
      ),
    },
    {
      label: "Rewards",
      path: "/rewards",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 7.5v9l-3.5 3.5-3.5-3.5-3.5 3.5-3.5-3.5v-9A4.5 4.5 0 0 1 9.5 3h5A4.5 4.5 0 0 1 19 7.5z"></path>
          <circle cx="12" cy="7" r="1"></circle>
        </svg>
      ),
    },
    {
      label: "Profile",
      path: "/profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      label: "More",
      path: "/more",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      ),
      dropdown: [
        {
          label: "Stats",
          path: "/stats",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          ),
        },
        {
          label: "Notifications",
          path: "/notifications",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          ),
        },
        {
          label: "Settings",
          path: "/settings",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          ),
        },
        {
          label: "Help",
          path: "/help",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          ),
        },
      ],
    },
  ];

  const [showMoreMenu, setShowMoreMenu] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around px-2 z-10">
      {navItems.map((item) => (
        <div key={item.path} className="relative">
          {item.dropdown ? (
            <button
              className={`flex flex-col items-center justify-center w-20 h-full ${
                showMoreMenu || item.dropdown.some(subItem => isActive(subItem.path))
                  ? "text-sport-blue font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setShowMoreMenu(!showMoreMenu)}
            >
              <div
                className={`${
                  showMoreMenu || item.dropdown.some(subItem => isActive(subItem.path)) 
                    ? "text-sport-blue" 
                    : "text-gray-400"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
              
              {/* Dropdown menu */}
              {showMoreMenu && (
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-20">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className={`flex items-center px-3 py-2 rounded-md text-sm ${
                        isActive(subItem.path)
                          ? "bg-blue-50 text-sport-blue"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => setShowMoreMenu(false)}
                    >
                      <span className="mr-2">{subItem.icon}</span>
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </button>
          ) : (
            <Link
              to={item.path}
              className={`flex flex-col items-center justify-center w-20 h-full ${
                isActive(item.path)
                  ? "text-sport-blue font-medium"
                  : "text-gray-500"
              }`}
            >
              <div
                className={`${
                  isActive(item.path) ? "text-sport-blue" : "text-gray-400"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )}
        </div>
      ))}
      
      {/* Overlay to close dropdown when clicking outside */}
      {showMoreMenu && (
        <div 
          className="fixed inset-0 bg-transparent z-10" 
          onClick={() => setShowMoreMenu(false)}
        />
      )}
    </div>
  );
};

export default NavigationBar;
