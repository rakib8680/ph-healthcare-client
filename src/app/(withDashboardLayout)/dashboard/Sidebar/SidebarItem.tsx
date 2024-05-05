import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type TSidebarPros = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: TSidebarPros) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathName = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderLeft: "4px solid #1586FD",
                backgroundColor: "rgba(0, 0, 0, 0.07)",
                "& svg": {
                  color: "#1586FD",
                },
              }
            : {}),

          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            {item.icon ? <item.icon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
