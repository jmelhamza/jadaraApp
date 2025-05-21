
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  user?: {
    name: string;
    avatarUrl?: string;
  };
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "/logo.png",
    alt: "logo",
    title: "Souss Tech Academy",
  },
  user = {
    name: "John Doe",
    avatarUrl: "",
  },
}: Navbar1Props) => {
  return (
    <header className="w-full border-b bg-background shadow-sm">
      <div className="container max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href={logo.url} className="flex items-center gap-3">
          <img src={logo.src} alt={logo.alt} className="h-30 object-contain" />
          <span className="text-xxl font-bold text-muted-foreground tracking-tight">
            {logo.title}
          </span>
        </a>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-muted-foreground">{user.name}</span>
          <Avatar className="h-9 w-9">
            {user.avatarUrl ? (
              <AvatarImage src={user.avatarUrl} alt={user.name} />
            ) : (
              <AvatarFallback>
                <User className="h-4 w-4 text-muted-foreground" />
              </AvatarFallback>
            )}
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export { Navbar1 };
