import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { BsNintendoSwitch, BsPlaystation } from "react-icons/bs";

interface IMenuItem {
  label: string;
  route: string;
  activeStyle: {
    color: string;
  };
  icon: IconType;
  renderIcon: (menuItem: IMenuItem) => JSX.Element;
  size: number;
}

const ScaleComponent = ({ children }: React.ComponentProps<any>) => (
  <motion.div
    whileHover={{ scale: 2.5 }}
    whileTap={{ scale: 2.5 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function Menu() {
  const router = useRouter();

  const isCurrentRoute = (route: string) => {
    return router.pathname === route;
  };
  const getIconStyle = (item: IMenuItem) => {
    const isActive = isCurrentRoute(item.route);
    return {
      fill: "white",
      size: item.size,
    };
  };

  const renderMenuItem = (item: IMenuItem) => {
    const isActive = isCurrentRoute(item.route);
    const IconComponent = item.icon;

    return (
      <ScaleComponent>
        <IconComponent {...getIconStyle(item)} />
      </ScaleComponent>
    );
  };

  const menuItems: IMenuItem[] = [
    {
      label: "Nintendo",
      route: "/nintendo",
      activeStyle: {
        color: "red",
      },
      icon: BsNintendoSwitch,
      renderIcon: renderMenuItem,
      size: 25,
    },
    {
      label: "Home",
      route: "/",
      activeStyle: {
        color: "#EEBA7B",
      },
      icon: AiOutlineHome,
      renderIcon: renderMenuItem,
      size: 35,
    },
    {
      label: "Playstation",
      route: "/playstation",
      activeStyle: {
        color: "#f09",
      },
      icon: BsPlaystation,
      renderIcon: renderMenuItem,
      size: 35,
    },
  ];
  return (
    <Stack
      direction="row"
      spacing={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {menuItems.map((item, index) => (
        <Link href={item.route} key={index}>
          {item.renderIcon(item)}
        </Link>
      ))}
    </Stack>
  );
}
