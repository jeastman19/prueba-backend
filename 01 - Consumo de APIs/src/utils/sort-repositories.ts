import { Repository } from "../types";

export const sortRepositories = (repositories: Repository[]): Repository[] => {
  return repositories.sort((a, b) => Number(b.stargazers_count) - Number(a.stargazers_count)).slice(0, 10);
};
