import { filterFirstTenRepositories, sortRepositories } from "./utils";
import { getRepositories } from "./utils/get-repositories";

getRepositories()
  .then((repositories) => {
    const sortedRepositories = sortRepositories(repositories);
    const firstTenRepositories = filterFirstTenRepositories(sortedRepositories);

    console.log(firstTenRepositories);
  })
  .catch((error) => {
    console.error(error);
  });
