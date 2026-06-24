function Header({ isDark, setIsDark }) {
  return (
    <div className="flex flex-col mb-5 md:flex-row md:justify-between">
      <div className="dark:text-white mb-5">
        <h1 className="text-2xl font-bold mb-2 mt-4">Social Media Dashboard</h1>
        <p className="font-bold text-light-text">Total Followers: 23,004</p>
      </div>
      <div className="flex justify-between border-t pt-5 text-light-text md:gap-2 md:border-t-0">
        <p>Dark Mode</p>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-blue-400 to-green-400"
              : "bg-[hsl(230,22%,74%)]"
          }`}
        >
          <span
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${
              isDark ? "left-7" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
