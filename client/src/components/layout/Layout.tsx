
import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"


export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>
  )
}
