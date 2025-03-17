import React, { useState } from "react";
import {
  Gavel,
  Menu,
  X,
  ChevronRight,
  Home,
  Info,
  Compass,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";

const Header = ({ onSignupClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Tablet Header */}

      <header className="border-b border-gray-800 sticky top-0 bg-gray-950/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Gavel size={24} className="text-blue-500" />
              <h1 className="text-2xl font-bold">
                Bid<span className="text-red-500">Smart</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button className="hover:text-blue-400 transition-colors font-medium">
                Explore
              </button>
              <button className="hover:text-blue-400 transition-colors font-medium">
                Live Auctions
              </button>
              <button className="hover:text-blue-400 transition-colors font-medium">
                How it Works
              </button>
              <button className="hover:text-blue-400 transition-colors font-medium">
                About
              </button>
            </nav>

            {/* Actions - Desktop & Tablet */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onSignupClick}
                className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
              >
                <Zap size={18} />
                <span className="font-semibold">Bid Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-gray-950/95 z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="border-b border-gray-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gavel size={24} className="text-blue-500" />
              <h1 className="text-2xl font-bold">
                Bid<span className="text-red-500">Smart</span>
              </h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-4">
              {[
                { icon: Home, label: "Home" },
                { icon: Compass, label: "Explore" },
                { icon: Info, label: "How it Works" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-4 w-full p-3 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <item.icon size={20} className="text-gray-400" />
                  <span>{item.label}</span>
                  <ChevronRight size={16} className="ml-auto text-gray-400" />
                </button>
              ))}
            </div>
          </nav>

          {/* Bottom Actions */}
          <div className="border-t border-gray-800 p-4 space-y-4">
            <button className="flex items-center gap-4 w-full p-3 hover:bg-gray-800 rounded-lg transition-colors">
              <Settings size={20} className="text-gray-400" />
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-4 w-full p-3 hover:bg-gray-800 rounded-lg transition-colors">
              <LogOut size={20} className="text-gray-400" />
              <span>Sign Out</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onSignupClick();
              }}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 p-3 rounded-lg transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
            >
              <Zap size={18} />
              <span className="font-semibold">Bid Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
