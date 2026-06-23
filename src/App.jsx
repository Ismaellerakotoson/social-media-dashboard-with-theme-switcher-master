import { useState } from 'react'
import Header from './components/Header';
import OverViewCard from './components/OverViewCard';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main className={`${isDark ? "dark" : ""} bg-white dark:bg-black`}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <OverViewCard/>
    </main>
  )
}

export default App
