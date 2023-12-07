import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { PAGE_DATA } from "@/data";
import { Quote } from "./Quote";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      h={{ base: "100%", md: "250px" }}
      w={{ base: "100%", md: "340px" }}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  const { title, clients } = PAGE_DATA.page.home.sectionThree;

  return (
    <Box>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>{title}</Heading>
        </Stack>
        <Wrap
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          justify={"center"}
        >
          {clients.map((client, i) => (
            <Testimonial key={`${i}-${client.name}`}>
              <TestimonialContent>
                <Quote body={client.quote.body} showQuoteIcon />
              </TestimonialContent>
              <TestimonialAvatar src={client.imageSrc} name={client.name} />
            </Testimonial>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}
