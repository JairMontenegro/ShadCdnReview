import { Badge } from "@/components/ui/badge";

export default function BadgeDemo() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge>Badge</Badge>
      <Badge capitalize variant={"destructive"}>
        destructive
      </Badge>
      <Badge variant={"secondary"}>secondary</Badge>
      <Badge variant={"outline"}>outline</Badge>
      <Badge variant={"info"}>info</Badge>
      <Badge capitalize variant={"success"}>
        success
      </Badge>
    </div>
  );
}
