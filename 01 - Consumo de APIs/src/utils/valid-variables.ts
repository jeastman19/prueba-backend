import { ValidVariables } from "../types";

export const validVariables = (variables: ValidVariables): void => {
  if (!variables.token) {
    throw new Error("La variable GITHUB_TOKEN");
  }

  if (!variables.org) {
    throw new Error("La variable GITHUB_ORG");
  }
};
