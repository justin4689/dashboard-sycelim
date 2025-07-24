import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import DatePicker from "@/components/date-picker";
import { Separator } from "@/components/ui/separator";

export default function FormThreeColumnHorizontal() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Formulaire à trois colonnes (horizontal)</h2>
      <Separator className="mb-4" />
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Colonne 1 */}
        <div className="flex items-center gap-4">
          <Label htmlFor="first" className="w-40">First name</Label>
          <Input id="first" placeholder="John" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="middle" className="w-40">Middle name</Label>
          <Input id="middle" placeholder="A." />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="last" className="w-40">Last name</Label>
          <Input id="last" placeholder="Doe" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="email3" className="w-40">Email</Label>
          <Input id="email3" type="email" placeholder="john@example.com" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="phone3" className="w-40">Phone</Label>
          <Input id="phone3" type="tel" placeholder="+1 555-9876" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="company" className="w-40">Company</Label>
          <Input id="company" placeholder="ACME Inc." />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="city3" className="w-40">City</Label>
          <Input id="city3" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="state3" className="w-40">State / Province</Label>
          <Input id="state3" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="zip3" className="w-40">ZIP / Postal code</Label>
          <Input id="zip3" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="country3" className="w-40">Country</Label>
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
        <div className="flex items-center gap-4">
          <Label className="w-40">Date de naissance</Label>
          <DatePicker />
        </div>
        <div className="flex items-center gap-4">
          <Label className="w-40">Date de naissance</Label>
          <DatePicker />
        </div>
        <div className="flex items-center gap-4 md:col-span-3 flex-wrap">
          <Checkbox id="promos3" />
          <Label htmlFor="promos3">Receive promotions</Label>
          <Switch id="active3" />
          <Label htmlFor="active3">Account active</Label>
        </div>
        <div className="flex items-center gap-4 md:col-span-3">
          <Label htmlFor="about3" className="w-40">About</Label>
          <Textarea id="about3" rows={4} />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="avatar" className="w-40">Photo de profil</Label>
          <Input id="avatar" type="file" accept="image/*" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="resume" className="w-40">CV (PDF)</Label>
          <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
        </div>
        <div className="flex items-center gap-4">
          <Label htmlFor="documents" className="w-40">Documents supplémentaires</Label>
          <Input id="documents" type="file" multiple />
        </div>
        <Separator className="mb-2 w-full col-span-3" />
        <div className="md:col-span-3 flex flex-wrap gap-2 justify-end">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit" className="bg-green-500 hover:bg-green-600">Save</Button>
        </div>
      </form>
    </div>
  );
}
