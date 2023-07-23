import {
  BellDot,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function SocialCard() {
  return (
    <div className="fixed right-0 bottom-0 bg-inherit z-40">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" size={"sm"}>
            <BellDot size={20} className="mr-1" />
            Sellucas
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/75432770?s=400&u=908ed7f3d10b8c1631c5a4a564c054424b9349a7&v=4" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">
                <Link href={"https://github.com/Sellucas/"} target="_blank">
                  @Sellucas
                </Link>
              </h4>
              <p className="text-sm">
                Desenvolvedor Front-End | React.js - Next.js - Typescript -
                Javascript
              </p>
              <div className="flex items-center pt-4">
                <ul className="flex flex-row gap-4">
                  <li>
                    <Link
                      href={
                        "https://drive.google.com/file/d/10MEO5mKclhvQDge_RcVsQPM_qAYf541H/view?usp=sharing/"
                      }
                      target="_blank"
                    >
                      <FileText size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://github.com/Sellucas/"} target="_blank">
                      <Github size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.linkedin.com/in/lucas-sell-machado/"}
                      target="_blank"
                    >
                      <Linkedin size={20} />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://portfolio-sellucas.vercel.app/"}
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
