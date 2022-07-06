import { useCallback, useEffect, useMemo, useRef } from "react";

function useKeyboardShortcut(key: string, onKeyDown: () => void) {
  const onKeyDownRef = useRef(onKeyDown);
  useEffect(() => {
    onKeyDownRef.current = onKeyDown;
  }, [onKeyDown]);

  const listener = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        onKeyDownRef.current();
      }
    },
    [key]
  );
  useEffect(() => {
    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, [listener]);
}

export default useKeyboardShortcut;
