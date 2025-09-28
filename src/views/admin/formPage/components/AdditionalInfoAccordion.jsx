import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function AdditionalInfoAccordion() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "whiteAlpha.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");
  const bgColor = useColorModeValue("white", "navy.800");
  const hoverBg = useColorModeValue("gray.50", "whiteAlpha.100");

  return (
    <Box mt="24px">
      <Heading as="h4" size="md" mb="20px" color={textColor}>
        Additional Information
      </Heading>
      <Accordion
        allowToggle
        bg={bgColor}
        borderRadius="12px"
        border="1px solid"
        borderColor={borderColor}
        overflow="hidden"
      >
        <AccordionItem border="none">
          <AccordionButton
            py="16px"
            px="20px"
            _hover={{ bg: hoverBg }}
            _expanded={{ bg: "brand.50", color: "brand.600" }}
          >
            <Box as="span" flex='1' textAlign='left' fontWeight="600">
              Personal Details
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="20px" px="20px" bg= "filledBg">
            <Text color={textColorSecondary}>
              Add any additional personal information here. This section can include
              emergency contacts, preferences, or other relevant details.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none">
          <AccordionButton
            py="16px"
            px="20px"
            _hover={{ bg: hoverBg }}
            _expanded={{ bg: "brand.50", color: "brand.600" }}
          >
            <Box as="span" flex='1' textAlign='left' fontWeight="600">
              Preferences & Settings
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="20px" px="20px" bg= "filledBg">
            <Text color={textColorSecondary}>
              Configure your notification preferences, language settings,
              and other customization options in this section.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border="none">
          <AccordionButton
            py="16px"
            px="20px"
            _hover={{ bg: hoverBg }}
            _expanded={{ bg: "brand.50", color: "brand.600" }}
          >
            <Box as="span" flex='1' textAlign='left' fontWeight="600">
              Advanced Options
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb="20px" px="20px" bg= "filledBg">
            <Text color={textColorSecondary}>
              Access advanced configuration options, API settings, and
              other technical preferences in this section.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
