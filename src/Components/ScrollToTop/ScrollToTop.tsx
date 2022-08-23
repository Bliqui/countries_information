import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const scrollToTheTopOfThePage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const detectScrollPosition = () => {
    if (window.scrollY > 100) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScrollPosition);

    return () => window.removeEventListener("scroll", detectScrollPosition);
  }, []);

  return (
    <Button
      position="fixed"
      bottom="20px"
      right="5%"
      bgColor="gray.700"
      display={buttonVisible ? "inline" : "none"}
      onClick={scrollToTheTopOfThePage}
      border="1px solid"
      borderColor="whiteAlpha.600"
      _hover={{ bgColor: "gray.800" }}
    >
      <ArrowUpIcon />
    </Button>
  );
};
