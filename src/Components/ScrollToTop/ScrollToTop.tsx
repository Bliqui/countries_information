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
      bgColor="gray.200"
      _hover={{ bgColor: "gray.300" }}
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 1)"
      _dark={{
        bgColor: "gray.700",
        _hover: { bgColor: "gray.800" },
        boxShadow: "0px 0px 4px 0px rgba(255, 255, 255, .01)",
      }}
      display={buttonVisible ? "inline" : "none"}
      onClick={scrollToTheTopOfThePage}
    >
      <ArrowUpIcon />
    </Button>
  );
};
