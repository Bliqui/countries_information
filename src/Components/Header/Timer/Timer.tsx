import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Timer = ({ timeZone }: { timeZone: string }) => {
  const [time, setTime] = useState("");

  const oneHour = 3600000;

  let receivedDifference: number;

  if (timeZone.slice(4, 6) === "00") {
    receivedDifference = 1;
  } else {
    receivedDifference = Number(timeZone.slice(4, 6)) + 1;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      let actualTime = timeZone.includes("-")
        ? Date.now() - oneHour * receivedDifference
        : Date.now() + oneHour * receivedDifference;

      setTime(
        new Date(actualTime).toLocaleString("pl-PL", {
          timeZone: "Africa/Ouagadougou",
          timeStyle: "short",
        })
      );
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Box fontWeight="600">{time}</Box>;
};
