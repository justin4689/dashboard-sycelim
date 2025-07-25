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
import { Separator } from "@/components/ui/separator"

export default function FormTwoColumn() {
  return (
    <div className="mb-10 rounded-lg border py-2 shadow-sm bg-background/50 backdrop-blur-sm">
    <h2 className="text-lg font-semibold mb-2 px-3 md:px-3 md:px-6">Formulaire à deux colonnes</h2>
    <Separator className="mb-2"/>
    <form className="grid grid-cols-1 gap-y-3 gap-x-4 md:grid-cols-2">
      {/* Col 1 */}
      <div className="flex flex-col gap-1 px-3 md:px-6">
        <Label htmlFor="firstName">First name</Label>
        <Input id="firstName" placeholder="John" />
      </div>
      <div className="flex flex-col gap-1 px-3 md:px-6">
        <Label htmlFor="lastName">Last name</Label>
        <Input id="lastName" placeholder="Doe" />
      </div>
      <div className="flex flex-col gap-1 px-3 md:px-6">
        <Label htmlFor="email2">Email</Label>
        <Input id="email2" type="email" placeholder="john@example.com" />
      </div>
      <div className="flex flex-col gap-1 px-3 md:px-6">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" placeholder="+1 555-1234" />
      </div>
      <div className="flex flex-col gap-1 md:col-span-2 px-3 md:px-6">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="123 Main St" />
      </div>
      <div className="flex flex-col gap-1 px-3 md:px-6">
        <Label htmlFor="city">City</Label>
        <Input id="city" />
      </div>
      <div className="flex flex-col gap-1 px-3 md:px-6">
        <Label htmlFor="country">Country</Label>
        <Select>
      <SelectTrigger className="w-full">
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
      <div className="flex items-center gap-2 md:col-span-2 px-3 md:px-6">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I agree to terms and conditions</Label>
      </div>
      <div className="flex flex-col gap-1 md:col-span-2 px-3 md:px-6">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" rows={4} />
      </div>
      <div className="flex flex-col gap-1 md:col-span-2 px-3 md:px-6">
        <Label htmlFor="avatar">Photo de profil</Label>
        <Input id="avatar" type="file" accept="image/*" />
      </div>
      <div className="flex flex-col gap-1 md:col-span-2 px-3 md:px-6">
        <Label htmlFor="resume">CV (PDF)</Label>
        <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
      </div>
     
      <div className="md:col-span-2 flex items-center gap-2 px-3 md:px-6">
        <Switch id="newsletter2" />
        <Label htmlFor="newsletter2">Subscribe to newsletter</Label>
      </div>
      <Separator className="mb-1 w-full md:col-span-2"/>
     <div className="px-3 md:px-6 md:col-span-2 pb-2">
     <Button type="submit" className="w-full">Save</Button>
     </div>
    </form>
  </div>
  )
}
