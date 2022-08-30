import { chakra } from "@chakra-ui/react";
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

  const formatTime = () => {
    let actualTime = timeZone.includes("-")
      ? Date.now() - oneHour * receivedDifference
      : Date.now() + oneHour * receivedDifference;

    setTime(
      new Date(actualTime).toLocaleString("us-EN", {
        timeZone: "Africa/Ouagadougou",
        timeStyle: "full",
      })
    );
  };

  useEffect(() => {
    formatTime();

    const timer = setInterval(() => {
      formatTime();
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <chakra.span fontWeight="600">{time}</chakra.span>;
};
