import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = <reqType>(url: string) => {
  const [data, setData] = useState<reqType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const callApi = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get<reqType>(url);
        setData(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    callApi();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
