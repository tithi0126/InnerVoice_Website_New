import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";

export default function FileUploadField({ formData, handleChange, fileName, handleFileClick }) {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "whiteAlpha.700");
  const borderColor = useColorModeValue("secondaryGray.100", "whiteAlpha.100");

  return (
    <FormControl gridColumn={{ base: "1", md: "1 / -1" }}>
      <FormLabel
        display="flex"
        ms="4px"
        htmlFor="uploadFile"
        fontSize="sm"
        color={textColor}
        fontWeight="600"
        mb="8px"
      >
        Upload File
      </FormLabel>
      <Input
        id="uploadFile"
        type="file"
        variant="main"
        display="none"
        onChange={handleChange}
      />
      <Box
        onClick={handleFileClick}
        cursor="pointer"
        border="2px dashed"
        borderColor={borderColor}
        borderRadius="12px"
        p="24px"
        textAlign="center"
        transition="all 0.3s ease"
        bg={useColorModeValue("gray.50", "whiteAlpha.50")}
        _hover={{
          borderColor: "brand.500",
          bg: useColorModeValue("gray.100", "whiteAlpha.100"),
          transform: "translateY(-2px)",
          shadow: "md",
        }}
      >
        <Icon
          as={FiUpload}
          w="28px"
          h="28px"
          mb="12px"
          color="brand.500"
        />
        <Text
          fontWeight="600"
          color={textColor}
          mb="6px"
          fontSize="md"
        >
          {fileName ? fileName : "Click to upload file"}
        </Text>
        <Text
          fontSize="sm"
          color={textColorSecondary}
        >
          PNG, JPG, PDF up to 10MB
        </Text>
      </Box>
    </FormControl>
  );
}
