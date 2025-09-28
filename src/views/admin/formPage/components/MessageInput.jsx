import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

export default function MessageInput({ formData, handleChange }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");

  return (
    <FormControl gridColumn={{ base: "1", md: "1 / -1" }}>
      <FormLabel
        display="flex"
        ms="4px"
        htmlFor="message"
        fontSize="sm"
        color={textColor}
        fontWeight="600"
        mb="8px"
      >
        Message
      </FormLabel>
      <Textarea
        id="message"
        variant="filled"
        placeholder="Your message here..."
        value={formData.message}
        onChange={handleChange}
        minH="120px"
        resize="vertical"
        bg={useColorModeValue("gray.50", "whiteAlpha.50")}
        border="1px solid"
        borderColor={borderColor}
        _hover={{
          borderColor: "brand.400",
        }}
        _focus={{
          borderColor: "brand.500",
          bg: "transparent",
        }}
      />
    </FormControl>
  );
}
