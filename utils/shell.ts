import * as bin from "./bin";

type CommandFunction = (args: string[]) => Promise<string>;
type BinKeys = keyof typeof bin;
type ShellCommands = BinKeys | "clear";

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const args = command.split(" ");
  const cmd = args[0].toLowerCase() as ShellCommands;

  if (command === "") {
    setHistory("");
  } else if (cmd === "clear") {
    clearHistory();
  } else if (!Object.prototype.hasOwnProperty.call(bin, cmd)) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`
    );
  } else {
    const output = await (bin[cmd as BinKeys] as CommandFunction)(
      args.slice(1)
    );
    setHistory(output);
  }

  setCommand("");
};
