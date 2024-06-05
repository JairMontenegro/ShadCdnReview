import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon, LockOpen2Icon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Destructive</AlertDescription>
      </Alert>

      <Alert variant="success">
        <LockOpen2Icon className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Success</AlertDescription>
      </Alert>
    </div>
  );
}
