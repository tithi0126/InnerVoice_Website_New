import React from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

export default function NewsletterSubscription({ formData, handleChange }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <FormControl
      display="flex"
      alignItems="center"
      gridColumn={{ base: "1", md: "1 / -1" }}
      mt="2"
    >
      <Checkbox
        id="subscribe"
        colorScheme="brand"
        isChecked={formData.subscribe}
        onChange={handleChange}
        size="lg"
      >
        <FormLabel
          htmlFor="subscribe"
          mb="0"
          fontWeight="500"
          color={textColor}
          fontSize="sm"
          ml="2"
        >
          Subscribe to newsletter
        </FormLabel>
      </Checkbox>
    </FormControl>
  );
}
