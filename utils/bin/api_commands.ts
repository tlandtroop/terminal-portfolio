import { getProjects } from "../api";
import { getQuote } from "../api";
import { getReadme } from "../api";
import { getWeather } from "../api";

export const projects = async (): Promise<string> => {
  interface Project {
    name: string;
    html_url: string;
  }

  const projectsList: Project[] = await getProjects();

  return projectsList
    .map(
      (repo: Project) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`
    )
    .join("\n");
};

export const quote = async (): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join("+");
  if (!city) {
    return "Usage: weather [city]. Example: weather casablanca";
  }
  const weather = await getWeather(city);
  return weather;
};
