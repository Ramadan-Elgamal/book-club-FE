import { useSearchParams, URLSearchParamsInit } from "react-router-dom";

export interface PaginationParams {
  skip?: number;
  limit?: number;
  sort?: string;
  [key: string]: string | number | undefined;
}

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: "0",
    limit: "10",
    sort: "-createdAt",
  });

  // Parsing the search parameters to an object with appropriate types
  const search: PaginationParams = Object.fromEntries(
    Array.from(searchParams.entries()).map(([key, value]) => [
      key,
      isNaN(Number(value)) ? value : Number(value),
    ]),
  );

  const setPagination = (paginat: PaginationParams) => {
    const updatedParams: PaginationParams = {
      ...search,
      ...paginat,
    };

    const keysToIgnore = ["skip", "sort"];
    const hasOtherChanges = Object.keys(paginat).some(
      (key) => !keysToIgnore.includes(key) && paginat[key] !== search[key],
    );

    if (hasOtherChanges) {
      updatedParams.skip = 0;
    }

    // Remove empty or undefined fields
    for (const key in updatedParams) {
      if (
        updatedParams[key] === undefined ||
        updatedParams[key] === null ||
        updatedParams[key] === "" ||
        updatedParams[key] === "**"
      ) {
        delete updatedParams[key];
      }
    }

    setSearchParams(updatedParams as URLSearchParamsInit);
  };

  return { pagination: search, setPagination };
};

export default usePagination;
