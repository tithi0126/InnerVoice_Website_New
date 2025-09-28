import React from "react";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function GenderSelection({ formData, handleRadioChange }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <FormControl>
      <FormLabel
        display="flex"
        ms="4px"
        fontSize="sm"
        color={textColor}
        fontWeight="600"
        mb="8px"
      >
        Gender
      </FormLabel>
      <RadioGroup
        onChange={handleRadioChange}
        value={formData.gender}
      >
        <Stack direction="row" spacing={6}>
          <Radio
            value="male"
            colorScheme="brand"
            size="md"
          >
            Male
          </Radio>
          <Radio
            value="female"
            colorScheme="brand"
            size="md"
          >
            Female
          </Radio>
          <Radio
            value="other"
            colorScheme="brand"
            size="md"
          >
            Other
          </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}
