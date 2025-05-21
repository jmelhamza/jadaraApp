
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

// Menu items.
const items = [
  { title: "PROFILE", url: "#", icon: FaUser },
  { title: "GROUPE", url: "#", icon: FaUsers },
  { title: "COURSES", url: "#", icon: FaBook },
  { title: "EVENTS", url: "#", icon: FaCalendarAlt },
  { title: "Settings", url: "#", icon: FaCog },
];

export function AppSidebar() {
  return (
    <Sidebar style={{ width: "150px" }}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <SidebarMenu style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", height: "40vh" }}>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </a>
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
