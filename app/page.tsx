"use client";

import { useEffect, useRef } from "react";

import { useHistory } from "@/hooks/useHistory";
import History from "@/components/history";
import Input from "@/components/input";
import { banner } from "@/utils/bin";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef(null);
  const mounted = useRef(false);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  useEffect(() => {
    if (!mounted.current) {
      setHistory(banner());
      mounted.current = true;
    }
  }, [setHistory]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history, inputRef]);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="p-2">
      <div
        className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow"
        onClick={onClickAnywhere}
      >
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </div>
  );
}
