import { useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory((prev) => {
      return replace ? [...prev.slice(0, prev.length - 1), newMode] : [...prev, newMode];
      // if replace = true, replace the last item in the history with the new mode rather than adding newMode on at the end of the array
    })
  }

  /* goals: 
  // need to remove the last item in history array 
    eg. history = [1, 2, 3] -> history.slice = [1, 2] -> create duplicate of this with [...history]
  // need to set mode to that new last item in history array (eg. new history = [1, 2] -> mode = 2) 
  */

  function back() {
    setHistory((prev) => {
      return history.length > 1 ? [...prev.slice(0, prev.length - 1)] : [...prev];
    })
  }

  return { mode: history[history.length -1], transition, back };
}

export default useVisualMode;