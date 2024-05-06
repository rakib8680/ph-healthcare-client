import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/generateDrawerItems";
import { TUserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.service";
import { useEffect, useState } from "react";



const Sidebar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        component={Link}
        href="/"
        direction="row"
        alignItems="center"
        justifyItems="center"
        gap={1}
        sx={{
          py: 3,
          px: 3,
        }}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component="h1">
          PH Health Care
        </Typography>
      </Stack>

      <List>
        {drawerItems(userRole as TUserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
