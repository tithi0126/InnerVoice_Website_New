import React from "react";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";

const RoleSelection = ({ selectedRole, onRoleSelect }) => {
  const textColor = useColorModeValue("navy.700", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const selectedBorderColor = useColorModeValue("brand.500", "brand.400");
  const hoverBg = useColorModeValue("gray.50", "whiteAlpha.100");

  const roles = [
    {
      id: "doctor",
      title: "Doctor",
      description: "Medical professional access",
      icon: "👨‍⚕️",
    },
    {
      id: "counselor",
      title: "Counselor",
      description: "Therapy and counseling access",
      icon: "🧠",
    },
    // {
    //   id: "institute",
    //   title: "Institute",
    //   description: "Organization management access",
    //   icon: "🏛️",
    // },
    // {
    //   id: "superadmin",
    //   title: "Super Admin",
    //   description: "Full system access",
    //   icon: "⚡",
    // },
  ];

  return (
    <Box mb="24px">
      <Text
        ms="4px"
        fontSize="sm"
        fontWeight="500"
        color={textColor}
        mb="16px"
      >
        Select Your Role<Text as="span" color="red.500">*</Text>
      </Text>
      <SimpleGrid columns={2} spacing={3}>
        {roles.map((role) => (
          <Flex
            key={role.id}
            direction="column"
            align="center"
            justify="center"
            p="16px"
            border="2px solid"
            borderColor={selectedRole === role.id ? selectedBorderColor : borderColor}
            borderRadius="12px"
            cursor="pointer"
            bg={selectedRole === role.id ? "brand.50" : "transparent"}
            _hover={{ bg: hoverBg }}
            onClick={() => onRoleSelect(role.id)}
            transition="all 0.2s"
          >
            <Text fontSize="24px" mb="8px">
              {role.icon}
            </Text>
            <Text fontSize="sm" fontWeight="600" color={textColor} textAlign="center">
              {role.title}
            </Text>
            <Text fontSize="xs" color="gray.500" textAlign="center" mt="4px">
              {role.description}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RoleSelection;