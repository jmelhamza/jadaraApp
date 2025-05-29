
import { FaUser, FaUsers, FaBook, FaCalendarAlt, FaCog } from "react-icons/fa";
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

// Menu items.
const items = [
  { title: "PROFILE", url: "/profile/", icon: FaUser },
  { title: "GROUPE", url: "#", icon: FaUsers },
  { title: "COURSES", url: "/profile/courses", icon: FaBook },
  { title: "EVENTS", url: "#", icon: FaCalendarAlt },
  { title: "Settings", url: "/profile/setting", icon: FaCog },
];

export function AppSidebar() {
  return (
    <Sidebar style={{ width: "6vw", height: "88vh", marginTop: "12vh"}}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <SidebarMenu style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "40vh" }}>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} style={{ display: "flex", alignItems: "center", gap: "10px", height: "40px" }}>
                      <item.icon/>
                    </Link>
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
