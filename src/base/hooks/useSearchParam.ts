/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useSearchParam(paramName: string) {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  let paramValue = queryParams.get(paramName);
  useEffect(() => {
    paramValue = queryParams.get(paramName);
  }, [location.search, paramName]);
  return paramValue;
}

export default useSearchParam;
