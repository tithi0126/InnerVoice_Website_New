import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiCalendar, FiClock } from "react-icons/fi";

export default function DateTimeFields({ formData, handleChange }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");

  const inputCss = {
    "&::-webkit-calendar-picker-indicator": {
      background: "transparent",
      color: "transparent",
      cursor: "pointer",
      height: "auto",
      width: "auto",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      width: "100%",
    },
  };

  return (
    <>
      {/* Date Field */}
      <FormControl>
        <FormLabel
          display="flex"
          ms="4px"
          htmlFor="date"
          fontSize="sm"
          color={textColor}
          fontWeight="600"
          mb="8px"
        >
          Date
        </FormLabel>
        <Box position="relative">
          <Icon
            as={FiCalendar}
            position="absolute"
            left="16px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            color="brand.500"
          />
          <Input
            id="date"
            type="date"
            variant="filled"
            h="44px"
            maxh="44px"
            pl="48px"
            value={formData.date}
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
            css={inputCss}
          />
        </Box>
      </FormControl>

      {/* Time Field */}
      <FormControl>
        <FormLabel
          display="flex"
          ms="4px"
          htmlFor="time"
          fontSize="sm"
          color={textColor}
          fontWeight="600"
          mb="8px"
        >
          Time
        </FormLabel>
        <Box position="relative">
          <Icon
            as={FiClock}
            position="absolute"
            left="16px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            color="brand.500"
          />
          <Input
            id="time"
            type="time"
            variant="filled"
            h="44px"
            maxh="44px"
            pl="48px"
            value={formData.time}
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
            css={inputCss}
          />
        </Box>
      </FormControl>

      {/* Date Time Field */}
      <FormControl>
        <FormLabel
          display="flex"
          ms="4px"
          htmlFor="dateTime"
          fontSize="sm"
          color={textColor}
          fontWeight="600"
          mb="8px"
        >
          Date Time
        </FormLabel>
        <Box position="relative">
          <Icon
            as={FiClock}
            position="absolute"
            left="16px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
            color="brand.500"
          />
          <Input
            id="dateTime"
            type="datetime-local"
            variant="filled"
            h="44px"
            maxh="44px"
            pl="48px"
            value={formData.dateTime}
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
            css={inputCss}
          />
        </Box>
      </FormControl>
    </>
  );
}
