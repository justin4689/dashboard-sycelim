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
export default function FormOneColumn() {
  return (
    <div className="mb-10 rounded-lg border py-2 shadow-sm bg-background/50 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-2 px-3 md:px-3 md:px-6">
        Formulaire à une colonne
      </h2>
      <Separator className="mb-2" />
      <form className="space-y-4">
        <div className="flex flex-col gap-1 px-3 md:px-3 md:px-6">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-3 md:px-6">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label htmlFor="role">Role</Label>
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

        <div className="flex flex-col md:flex-row items-center gap-4 justify-between px-3 md:px-3 md:px-6">
          <div className="w-full md:w-1/2 flex items-center gap-2">
            <Checkbox id="subscribe" />
            <Label htmlFor="subscribe">Subscribe to newsletter</Label>
          </div>
          <div className="flex flex-col gap-1 md:w-1/2 w-full px-3 md:px-6">
            <Label htmlFor="date" className="px-1 ">
              Date de naissance
            </Label>
            <DatePicker />
          </div>
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label>Gender</Label>
          <RadioGroup defaultValue="male">
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
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" rows={4} />
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label htmlFor="avatar">Photo de profil</Label>
          <Input id="avatar" type="file" accept="image/*" />
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label htmlFor="resume">CV (PDF)</Label>
          <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
        </div>
        <div className="flex flex-col gap-1 px-3 md:px-6">
          <Label htmlFor="documents">Documents supplémentaires</Label>
          <Input id="documents" type="file" multiple />
        </div>
        <div className="flex items-center gap-2 px-3 md:px-6  ">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
        <Separator className="mb-2 w-full" />
        <div className="flex items-center gap-2 justify-end px-3 md:px-6 ">
          <Button type="submit" className="">
            Submit
          </Button>
          <Button type="submit" className="bg-red-500 hover:bg-red-600">
            Cancel
          </Button>
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            Save
          </Button>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 ">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
