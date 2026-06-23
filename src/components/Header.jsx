function Header({ isDark, setIsDark }) {
  return (
    <div className="flex">
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="flex">
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
