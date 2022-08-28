import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        Intl.DateTimeFormat("pl-PL", {
          timeStyle: "medium",
        }).format(new Date())
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Box>{time}</Box>;
};
