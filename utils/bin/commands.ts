import * as bin from "./index";
import config from "@/config.json";

export const help = async (): Promise<string> => {
  // const commands = Object.keys(bin).sort().join(", ");
  let c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (): Promise<string> => {
  window.open(`${config.repo}`);
  return "Opening Github repository...";
};

// About
export const about = async (): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (): Promise<string> => {
  window.open(`${config.resumeUrl}`);
  return "Opening resume...";
};

// Contact
export const email = async (): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return "Opening github...";
};

export const linkedin = async (): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return "Opening linkedin...";
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(" ")}`);
  return `Searching google for ${args.join(" ")}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(" ")}`);
  return `Searching duckduckgo for ${args.join(" ")}...`;
};

export const gui = async (): Promise<string> => {
  window.open(`https://portfolio-tlandtroop.vercel.app`);
  return `Opening other portfolio...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(" ")}`);
  return `Searching reddit for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};

export const whoami = async (): Promise<string> => {
  return `${config.commandPromptUsername}`;
};

export const ls = async (): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (): Promise<string> => {
  return new Date().toString();
};

export const vi = async (): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (): Promise<string> => {
  return `you know what? just use 'vscode'.`;
};

export const vscode = async (): Promise<string> => {
  window.open(`https://vscode.dev`);
  return `i like vscode too!`;
};

export const sudo = async (): Promise<string> => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (): string => {
  return `
████████╗██╗      █████╗ ███╗   ██╗██████╗ ████████╗██████╗  ██████╗  ██████╗ ██████╗
╚══██╔══╝██║     ██╔══██╗████╗  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔═══██╗██╔═══██╗██╔══██╗
   ██║   ██║     ███████║██╔██╗ ██║██║  ██║   ██║   ██████╔╝██║   ██║██║   ██║██████╔╝
   ██║   ██║     ██╔══██║██║╚██╗██║██║  ██║   ██║   ██╔══██╗██║   ██║██║   ██║██╔═══╝
   ██║   ███████╗██║  ██║██║ ╚████║██████╔╝   ██║   ██║  ██║╚██████╔╝╚██████╔╝██║
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝


Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
Type 'gui' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.gui}" target="_blank">here</a></u> for my other portfolio.
`;
};
