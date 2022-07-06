import { useCallback, useEffect, useMemo } from "react";

function useKeyboardShortcut(key: string, onKeyDown: () => void) {
  const listener = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        onKeyDown();
      }
    },
    [key, onKeyDown]
  );
  useEffect(() => {
    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, [listener]);
}

export default useKeyboardShortcut;
