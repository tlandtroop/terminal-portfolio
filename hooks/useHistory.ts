"use client";

import { useState } from "react";

import { History } from "@/types/history";

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistory] = useState<Array<History>>(defaultValue);
  const [command, setCommand] = useState<string>("");
  const [lastCommandIndex, setLastCommandIndex] = useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearHistory: () => setHistory([]),
  };
};
