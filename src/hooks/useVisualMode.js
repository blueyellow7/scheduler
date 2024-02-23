import { useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode) {
    setHistory((prev) => [...prev, newMode])
  }

  /* goals: 
  // need to remove the last item in history array 
    eg. history = [1, 2, 3] -> history.slice = [1, 2] -> create duplicate of this with [...history]
  // need to set mode to that new last item in history array (eg. new history = [1, 2] -> mode = 2) 
  */

  function back() {
    setHistory(prev => [...prev.slice(0, prev.length - 1)])
  }

  return { mode: history[history.length -1], transition, back };
}

export default useVisualMode;