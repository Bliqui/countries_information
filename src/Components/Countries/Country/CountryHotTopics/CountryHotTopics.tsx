import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFetch } from "../../../../hooks/useFetch";
import { formateDate } from "../../../../utils/formateDate";
import { textLengthFormate } from "../../../../utils/textLengthFormate";

type TopicsData = {
  articles: [
    {
      source: {
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      countryFlag: string;
    }
  ];
};

export const CountryHotTopics = ({
  countryFlag,
  countryIso,
}: {
  countryFlag: string;
  countryIso: string;
}) => {
  const {
    data: receivedTopics,
    isLoading,
    error,
  } = useFetch<TopicsData>(
    `https://newsapi.org/v2/top-headlines?country=${countryIso}&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  const cutData = receivedTopics?.articles.slice(0, 6);

  return cutData?.length ? (
    <Center mt="40px" flexDir="column">
      <Heading>Top-6 country news:</Heading>
      <SimpleGrid
        mt="40px"
        width="100%"
        gridTemplateColumns="repeat(auto-fit, minmax(300px , 1fr));"
        spacing="30px"
      >
        {isLoading && <Spinner />}
        {receivedTopics?.articles ? (
          cutData?.map((article) => {
            return (
              <Flex
                key={article.title}
                _dark={{ bgColor: "gray.800" }}
                borderRadius="10px"
                alignItems="center"
                w="320px"
                minH="400px"
                mx="auto"
                boxShadow="0px 0px 8px 0px rgba(66, 68, 90, .6)"
                flexDir="column"
                textAlign="center"
              >
                <Image
                  src={article.urlToImage ? article.urlToImage : countryFlag}
                  borderTopLeftRadius="10px"
                  borderTopRightRadius="10px"
                />
                <VStack p="10px" h="100%" justifyContent="space-between">
                  <Heading mb="10px" size="md">
                    {textLengthFormate(article.title, 70)}
                  </Heading>
                  <Text>{textLengthFormate(article.description, 120)}</Text>
                  <Box>
                    <Text mt="10px" mb="5px" fontWeight={600}>
                      {article.author && `Author: ${article.author}`}
                    </Text>
                    <Text textTransform="capitalize" mb="10px" fontWeight={600}>
                      {formateDate(article.publishedAt)}
                    </Text>
                    <Link
                      py="8px"
                      px="20px"
                      mt="10px"
                      borderRadius="10px"
                      _hover={{
                        textTransform: "none",
                        bgColor: "whiteAlpha.900",
                      }}
                      _active={{ bgColor: "blackAlpha.400" }}
                      _dark={{
                        bgColor: "blackAlpha.500",
                        _hover: { bgColor: "whiteAlpha.200" },
                      }}
                      boxShadow="0px 0px 4px 0px rgba(66, 68, 90, 1)"
                      bgColor="whiteAlpha.700"
                      isExternal
                      href={article.url}
                      display="inline-block"
                    >
                      Read full article
                    </Link>
                  </Box>
                </VStack>
              </Flex>
            );
          })
        ) : (
          <Text>{error}</Text>
        )}
      </SimpleGrid>
    </Center>
  ) : null;
};
