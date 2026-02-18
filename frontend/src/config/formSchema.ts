import type { User } from "../types/User";

export type FieldType = {
  name: keyof Omit<User, "_id">;
  label: string;
  type: string;
};

export const formSchema: FieldType[] = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" }
];
