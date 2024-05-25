import { Repository } from "../types";

export const filterFirstTenRepositories = (repositories: Repository[]): Repository[] => {
  return repositories.slice(0, 10);
};
