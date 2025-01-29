import config from "@/config.json";

export const CommandPrompt = () => {
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">
        {config.commandPromptUsername}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.commandPromptHostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default CommandPrompt;
