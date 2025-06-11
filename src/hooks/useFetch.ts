import { useCallback, useEffect, useState } from "react";

interface UseFetch {
  url: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  headers: {
    [key: string]: string;
  };
  keepalive: boolean;
  body?: {
    [key: string]: string | number;
  };
}

function useFetch(props: UseFetch) {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchAPI = useCallback(async () => {
    setIsPending(true);

    const response = await fetch(props.url, {
      method: props.method,
      headers: props.headers,
      keepalive: props.keepalive,
    });

    setIsPending(false);

    if (!response.ok) {
      setIsError(true);
      throw new Error("fetch failed");
    }

    setIsSuccess(true);

    const res = await response.json();

    return res;
  }, []);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return {
    isPending,
    isSuccess,
    isError,
  };
}

export default useFetch;
