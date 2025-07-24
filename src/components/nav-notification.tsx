import { IconBell } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavNotification() {

  // Exemple de notifications (à remplacer par vos données réelles)
  const notifications = [
    {
      id: 1,
      title: "Nouveau rapport disponible",
      description: "Le rapport Q2 est prêt à être consulté.",
    },
    {
      id: 2,
      title: "Mise à jour de la base de données",
      description: "La synchronisation s'est terminée avec succès.",
    },
  ]

  const unreadCount = notifications.length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          className="relative data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-sidebar-accent hover:bg-sidebar-accent cursor-pointer"
        >
          <IconBell className="size-5 text-black" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-72 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <p className="p-4 text-sm text-muted-foreground">Aucune nouvelle notification.</p>
        ) : (
          notifications.map((n) => (
            <DropdownMenuItem
              key={n.id}
              className="whitespace-normal py-2"
            >
              <div className="ml-2 text-sm leading-tight">
                <p className="font-medium">{n.title}</p>
                <p className="text-xs text-muted-foreground">{n.description}</p>
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}