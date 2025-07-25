import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import DatePicker from "@/components/date-picker"
import { Separator } from "@/components/ui/separator"

export default function FormThreeColumn() {
  return (
  <div className="mb-10 rounded-lg border py-2 shadow-sm bg-background/50 backdrop-blur-sm">
    <h2 className="text-lg font-semibold px-3 md:px-6 mb-4">Formulaire à trois colonnes</h2>
    <Separator className="mb-4" />
    <form className="flex flex-col gap-4 sm:gap-6">
      {/* LIGNE 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="first">First name</Label>
          <Input id="first" placeholder="John" />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="middle">Middle name</Label>
          <Input id="middle" placeholder="A." />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="last">Last name</Label>
          <Input id="last" placeholder="Doe" />
        </div>
      </div>
      {/* LIGNE 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="email3">Email</Label>
          <Input id="email3" type="email" placeholder="john@example.com" />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="phone3">Phone</Label>
          <Input id="phone3" type="tel" placeholder="+1 555-9876" />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="ACME Inc." />
        </div>
      </div>
      {/* LIGNE 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="city3">City</Label>
          <Input id="city3" />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="state3">State / Province</Label>
          <Input id="state3" />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="zip3">ZIP / Postal code</Label>
          <Input id="zip3" />
        </div>
      </div>
      {/* LIGNE 4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="country3">Country</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="es">Spain</SelectItem>
                <SelectItem value="us">USA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="date1" className="px-1 ">Date de naissance</Label>
          <DatePicker />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="date2" className="px-1 ">Date de naissance</Label>
          <DatePicker />
        </div>
      </div>
      {/* LIGNE 5 : Checkbox/Switch group */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-6">
        <div className="flex flex-row items-center gap-2 w-full">
          <Checkbox id="promos3" />
          <Label htmlFor="promos3">Receive promotions</Label>
        </div>
        <div className="flex flex-row items-center gap-2 w-full">
          <Switch id="active3" />
          <Label htmlFor="active3">Account active</Label>
        </div>
        <div></div>
      </div>
      {/* LIGNE 6 : About + Files */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="about3">About</Label>
          <Textarea id="about3" rows={4} />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="avatar">Photo de profil</Label>
          <Input id="avatar" type="file" accept="image/*" />
        </div>
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="resume">CV (PDF)</Label>
          <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
        </div>
      </div>
      {/* LIGNE 7 : Documents supplémentaires */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 w-full px-3 md:px-6">
          <Label htmlFor="documents">Documents supplémentaires</Label>
          <Input id="documents" type="file" multiple />
        </div>
        <div></div>
        <div></div>
      </div>
      <Separator className="mb-1 w-full" />
      {/* BOUTONS */}
      <div className="flex flex-wrap gap-2 justify-end px-3 md:px-6">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit" className="bg-green-500 hover:bg-green-600">Save</Button>
      </div>
    </form>
  </div>
) 
}
