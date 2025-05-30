
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  username?: string;
  avatarUrl?: string;
}

const Navbar1 = ({
  logo = {
    url: "#",
    src: "/logo.png",
    alt: "logo",
    title: "Souss Tech Academy",
  },
  username,
  avatarUrl,
}: Navbar1Props) => {
  return (
    <header className="w-full border-b flex items-center h-22 shadow-sm fixed top-0 bg-background dark:bg-neutral-900">
      <div className="container max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href={logo.url} className="flex items-center gap-3">
          <img src={logo.src} alt={logo.alt} className="h-30 object-contain" />
          <span className="text-xxl font-bold text-muted-foreground dark:text-gray-300 tracking-tight">
            {logo.title}
          </span>
        </a>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-muted-foreground">{username}</span>
          <Avatar className="h-9 w-9">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={username} />
            ) : (
              <AvatarFallback>
                <User className="h-12 w-12 text-muted-foreground dark:text-gray-400" />
              </AvatarFallback>
            )}
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export { Navbar1 };
