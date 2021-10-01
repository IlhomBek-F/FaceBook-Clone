import React from "react";
import "./css/sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";
function Sidebar({ motion, responsiveForMobile }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <motion.div
      initial={responsiveForMobile ? { x: 390 } : { opacity: 0 }}
      animate={responsiveForMobile ? { x: 0 } : { opacity: 1 }}
      exit={responsiveForMobile ? { x: 100 } : { opacity: 0 }}
      transition={responsiveForMobile ? { delay: 0 } : ""}
      className="sidebar"
    >
      <SidebarRow
        src="https://avatars.githubusercontent.com/u/72074602?v=4"
        title={user.displayName}
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </motion.div>
  );
}

export default Sidebar;
