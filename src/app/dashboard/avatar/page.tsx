import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/90481859?s=400&u=9c0acffb660d80f8b255305d1878e2ea9576a467&v=4"
          alt="logo"
        />
        <AvatarFallback>JM</AvatarFallback>
      </Avatar>
      <p className="m-2">Jair Montenegro</p>
    </div>
  );
}
