import { useState } from "react";
import Header from "./components/Header";
import OverViewCard from "./components/OverViewCard";
import SocialCard from "./components/SocialCard";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main className={`${isDark ? "dark" : ""} bg-white dark:bg-black min-h-screen pb-6`}>
      <div className="px-[5%]">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <SocialCard />
        <OverViewCard/>
      </div>
    </main>
  );
}

export default App;
