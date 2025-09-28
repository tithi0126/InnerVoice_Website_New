import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import InputField from "components/fields/InputField";

export default function PersonalDetailsForm({ formData, handleChange }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");

  return (
    <>
      <InputField
        mb="0"
        id="fullName"
        label="Full Name"
        placeholder="John Doe"
        type="text"
        value={formData.fullName}
        onChange={handleChange}
      />
      <InputField
        mb="0"
        id="email"
        label="Email Address"
        placeholder="hello@example.com"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        mb="0"
        id="password"
        label="Password"
        placeholder="Min. 8 characters"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <FormControl>
        <FormLabel
          display="flex"
          ms="4px"
          htmlFor="country"
          fontSize="sm"
          color={textColor}
          fontWeight="600"
          mb="8px"
        >
          Country
        </FormLabel>
        <Select
          id="country"
          variant="filled"
          placeholder="Select country"
          h="44px"
          maxh="44px"
          value={formData.country}
          onChange={handleChange}
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
        >
          <option value="usa">United States</option>
          <option value="can">Canada</option>
          <option value="mex">Mexico</option>
        </Select>
      </FormControl>
    </>
  );
}
