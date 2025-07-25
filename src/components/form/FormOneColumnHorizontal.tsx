    import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import DatePicker from "@/components/date-picker";
import { Separator } from "@/components/ui/separator";

export default function FormOneColumnHorizontal() {
  return (
    <div className="mb-10 rounded-lg border py-2 shadow-sm bg-background/50 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4 px-3 md:px-6">Formulaire à une colonne (horizontal)</h2>
      <Separator className="mb-4 w-full" />
      <form className="space-y-4 ">
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="name" className="w-20 md:w-32">Name</Label>
          <Input id="name" placeholder="John Doe" className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="email" className="w-20 md:w-32">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="password" className="w-20 md:w-32">Password</Label>
          <Input id="password" type="password" className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="role" className="w-20 md:w-32">Role</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 px-3 md:px-6">
          <div className="flex items-center gap-2 w-1/2">
            <Checkbox id="subscribe" />
            <Label htmlFor="subscribe">Subscribe to newsletter</Label>
          </div>
          <div className="flex flex-col gap-2 ">
          <Label htmlFor="date">Date de naissance</Label>
          <DatePicker />
          </div>
         
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label className="w-20 md:w-32">Gender</Label>
          <RadioGroup defaultValue="male" className="flex flex-row gap-6">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="bio" className="w-32">Bio</Label>
          <Textarea id="bio" rows={4} className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="avatar" className="w-32">Photo de profil</Label>
          <Input id="avatar" type="file" accept="image/*" className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="resume" className="w-32">CV (PDF)</Label>
          <Input id="resume" type="file" accept=".pdf,.doc,.docx" className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Label htmlFor="documents" className="w-32">Documents supplémentaires</Label>
          <Input id="documents" type="file" multiple className="w-full" />
        </div>
        <div className="flex items-center gap-4 px-3 md:px-6">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <Separator className="mb-4" />
        <div className="flex items-center justify-center gap-2 flex-wrap md:justify-end px-3 md:px-6">
          <Button type="submit">Submit</Button>
          <Button type="submit" className="bg-red-500 hover:bg-red-600">Cancel</Button>
          <Button type="submit" className="bg-green-500 hover:bg-green-600">Save</Button>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Update</Button>
        </div>
      </form>
    </div>
  );
}
