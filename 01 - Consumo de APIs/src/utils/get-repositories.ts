import "dotenv/config";

import { Octokit } from "@octokit/rest";

import { Repository } from "../types";
import { mapRepositories, validVariables } from "./";

export const getRepositories = async (): Promise<Repository[]> => {
  const { GITHUB_TOKEN, GITHUB_ORG, GITHUB_TYPE } = process.env;

  validVariables({ token: GITHUB_TOKEN, org: GITHUB_ORG });

  const token = GITHUB_TOKEN as string;
  const org = GITHUB_ORG as string;
  const type = GITHUB_TYPE as string;

  const octokit = new Octokit({
    token,
  });

  return octokit.rest.repos
    .listForOrg({
      org,
      type: "public",
    })
    .then(({ data }) => {
      return Promise.resolve(mapRepositories(data));
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
