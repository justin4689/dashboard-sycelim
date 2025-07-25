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
import { Separator } from "@/components/ui/separator";

export default function FormTwoColumnHorizontal() {
  return (
    <div className="mb-10 rounded-lg border py-2 shadow-sm bg-background/50 backdrop-blur-sm">

      <h2 className="text-lg font-semibold mb-2 px-3 md:px-6">Formulaire à deux colonnes (horizontal)</h2>
      <Separator className="mb-2" />
      <form className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-4">
        <div className="w-full flex flex-row items-center gap-2 px-3 md:gap-4 md:px-6">
          <Label htmlFor="firstName" className="w-20 md:w-32">First name</Label>
          <Input id="firstName" placeholder="John" className="flex-1 w-full" />
        </div>
        <div className="w-full flex flex-row items-center gap-2 px-3 md:gap-4 md:px-6">
          <Label htmlFor="lastName" className="w-20 md:w-32">Last name</Label>
          <Input id="lastName" placeholder="Doe" className="flex-1 w-full" />
        </div>
        <div className="w-full flex flex-row items-center gap-2 px-3 md:gap-4 md:px-6">
          <Label  htmlFor="email2" className="w-20 md:w-32">Email</Label>
          <Input id="email2" type="email" placeholder="john@example.com" className="flex-1 w-full" />
        </div>
        <div className="w-full flex flex-row items-center gap-2 px-3 md:gap-4 md:px-6">
          <Label htmlFor="phone" className="w-20 md:w-32">Phone</Label>
          <Input id="phone" type="tel" placeholder="+1 555-1234" className="flex-1 w-full" />
        </div>
      
        <div className="w-full flex flex-row items-center gap-2 px-3 md:gap-4 md:px-6">
          <Label htmlFor="city" className="w-20 md:w-32">City</Label>
          <Input id="city" className="flex-1 w-full" />
        </div>
        <div className="w-full flex flex-row items-center gap-2 px-3 md:gap-4 md:px-6">
          <Label htmlFor="country" className="w-20 md:w-32">Country</Label>
          <Select>
            <SelectTrigger className="flex-1 w-full">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Country</SelectLabel>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="italy">Italy</SelectItem>
                <SelectItem value="spain">Spain</SelectItem>
                <SelectItem value="uk">UK</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex items-start gap-1 px-3 md:flex-row md:items-center md:gap-4 md:px-6 md:col-span-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="">I agree to terms and conditions</Label>
        </div>
        <div className="w-full flex  gap-1 px-3 md:flex-row md:items-center md:gap-4 md:px-6 md:col-span-2">
          <Label htmlFor="notes" className="w-20 md:w-32">Notes</Label>
          <Textarea id="notes" rows={4} className="flex-1 w-full" />
        </div>
        <div className="w-full flex  gap-1 px-3 md:flex-row md:items-center md:gap-4 md:px-6">
          <Label htmlFor="avatar" className="w-20 md:w-32">Photo de profil</Label>
          <Input id="avatar" type="file" accept="image/*" className="flex-1 w-full" />
        </div>
        <div className="w-full flex  gap-1 px-3 md:flex-row md:items-center md:gap-4 md:px-6">
          <Label htmlFor="resume" className="w-20 md:w-32">CV (PDF)</Label>
          <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="flex-1 w-full" />
        </div>
       
        <div className="flex gap-1 px-3 md:flex-row md:items-center  md:gap-4 md:px-6 md:col-span-2">
          <Switch id="newsletter2" />
          <Label htmlFor="newsletter2">Subscribe to newsletter</Label>
        </div>
        <Separator className="mb-2 w-full col-span-2 px-3 md:px-6" />
     <div className="px-3 md:px-6 md:md:col-span-2 pb-2">
          <Button type="submit" className="w-full">Save</Button>
        </div>
      </form>
    </div>
  );
}
