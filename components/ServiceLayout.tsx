import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Quote } from "./Quote";
import { ContactForm, SERVICE_TYPE } from "./ContactForm";
import { StandardSection } from "./StandardSection";

interface ServiceLayoutProps {
  title: string;
  body: string;
  sections?: {
    title: string;
    body: string;
    sections?: { title: string; body: string }[];
  }[];
  imageSrc?: string;
  defaultService?: SERVICE_TYPE;
}

export const ServiceLayout = ({
  title,
  body,
  sections,
  imageSrc,
  defaultService,
}: ServiceLayoutProps) => {
  return (
    <VStack>
      <VStack align={"start"}>
        <Heading size={"xl"} pl="24px" pt="24px" color="green.400">
          {title}
        </Heading>
        <HStack flexDir={{ base: "column-reverse", md: "row" }}>
          <VStack p="12px" w={{ base: "100%", md: "500px" }}>
            <Quote body={body} />
          </VStack>
          <VStack p="12px">
            <Image
              w="200px"
              alt={`service-${title}`}
              src={imageSrc}
              rounded={"md"}
              shadow={"2xl"}
              loading="eager"
            />
          </VStack>
        </HStack>
        {sections?.map((section) => (
          <StandardSection
            key={section.title}
            title={section.title}
            body={section.body}
            sections={section.sections}
          />
        ))}
        <VStack p="24px" align={"start"} w="100%">
          <Heading>Book Free Consultation</Heading>
          <Text>
            We provide in-person services in Hudson County and Ocean County, as
            well as remote services via Zoom or phone.
          </Text>
          <Card m="12px" variant={"outline"} w="100%">
            <CardBody>
              <Stack w="100%">
                <ContactForm defaultService={defaultService} />
              </Stack>
            </CardBody>
          </Card>
        </VStack>
      </VStack>
    </VStack>
  );
};
