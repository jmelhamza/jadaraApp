
import { FaUser, FaUsers, FaBook, FaCalendarAlt, FaCog, FaChartArea } from "react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { MyToken } from "../layout";
import { useContext } from "react";

// Menu items.
const items = [
  { title: "PROFILE", url: "/profile/", icon: FaUser },
  { title: "GROUPE", url: "/profile/groupe", icon: FaUsers },
  { title: "COURSES", url: "/profile/courses", icon: FaBook },
  { title: "EVENTS", url: "/profile/events", icon: FaCalendarAlt },
  { title: "Settings", url: "/profile/setting", icon: FaCog },
];

export function AppSidebar() {

  const data = useContext(MyToken)

  return (
    <Sidebar style={{ width: "6vw", height: "88vh", marginTop: "12vh"}}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <SidebarMenu style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "40vh" }}>
              {items.map((item, i) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    { (data.role == "admin" && ( i == 0))?  
                    <Link to={item.url} style={{ display: "flex", alignItems: "center", gap: "10px", height: "40px" }}>
                      <FaChartArea size={30}/>
                    </Link>: 
                    <Link to={item.url} style={{ display: "flex", alignItems: "center", gap: "10px", height: "40px" }}>
                      <item.icon/>
                    </Link>
                    }
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
