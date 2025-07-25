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
    <div className="mb-10 rounded-lg border py-2 shadow-sm bg-background/50 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-2 px-3 md:px-6">Formulaire à trois colonnes (horizontal)</h2>
      <Separator className="mb-2" />
      <form className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
        {/* Colonne 1 */}
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="first" className="w-20 md:w-32">First name</Label>
          <Input id="first" placeholder="John" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="middle" className="w-20 md:w-32">Middle name</Label>
          <Input id="middle" placeholder="A." className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="last" className="w-20 md:w-32">Last name</Label>
          <Input id="last" placeholder="Doe" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="email3" className="w-20 md:w-32">Email</Label>
          <Input id="email3" type="email" placeholder="john@example.com" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="phone3" className="w-20 md:w-32">Phone</Label>
          <Input id="phone3" type="tel" placeholder="+1 555-9876" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="company" className="w-20 md:w-32">Company</Label>
          <Input id="company" placeholder="ACME Inc." className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="city3" className="w-20 md:w-32">City</Label>
          <Input id="city3" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="state3" className="w-20 md:w-32">State / Province</Label>
          <Input id="state3" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="zip3" className="w-20 md:w-32">ZIP / Postal code</Label>
          <Input id="zip3" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="country3" className="w-20 md:w-32">Country</Label>
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
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label className="w-20 md:w-32">Date de naissance</Label>
          <DatePicker />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label className="w-20 md:w-32">Date de naissance</Label>
          <DatePicker />
        </div>
        <div className="w-full flex  md:items-center gap-3 md:gap-1 px-3 md:gap-4 md:px-6 md:col-span-3">
          <Checkbox id="promos3" />
          <Label htmlFor="promos3">Receive promotions</Label>
          <Switch id="active3" />
          <Label htmlFor="active3">Account active</Label>
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6 md:col-span-3">
          <Label htmlFor="about3" className="w-20 md:w-32">About</Label>
          <Textarea id="about3" rows={4} className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:gap-4 md:px-6 ">
          <Label htmlFor="avatar" className="w-20 md:w-32">Photo de profil</Label>
          <Input id="avatar" type="file" accept="image/*" className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:gap-4 md:px-6 ">
          <Label htmlFor="resume" className="w-20 md:w-32">CV (PDF)</Label>
          <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="w-full" />
        </div>
        <div className="w-full flex  md:items-center gap-1 px-3 md:gap-4 md:px-6">
          <Label htmlFor="documents" className="w-20 md:w-32">Documents </Label>
          <Input id="documents" type="file" multiple className="w-full" />
        </div>
        <Separator className="mb-2 w-full col-span-2 px-3 md:px-6" />
        <div className="md:col-span-3 flex flex-wrap gap-2 justify-end px-3 md:gap-4 md:px-6">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit" className="bg-green-500 hover:bg-green-600">Save</Button>
        </div>
      </form>
    </div>
  );
}