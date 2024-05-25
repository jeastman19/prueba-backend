import { Repository } from "../types/repository";

export const mapRepositories = (repositories: any[]): Repository[] => {
  return repositories.map((repo) => ({
    html_url: repo.html_url,
    stargazers_count: repo.stargazers_count,
  }));
};
