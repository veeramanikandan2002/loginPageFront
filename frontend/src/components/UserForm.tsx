import { useEffect, useState } from "react";
import type { User } from "../types/User";
import { formSchema } from "../config/formSchema";
import Field from "./Field";

type Props = {
  onSubmit: (data: User) => void;
  editingUser: User | null;
};



const nameRegex = /^[A-Za-z]+$/;
const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function UserForm({ onSubmit, editingUser }: Props) {

  const [form, setForm] = useState<User>({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});



  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  const validate = () => {
    const e: Record<string, string> = {};

    if (!nameRegex.test(form.firstName))
      e.firstName = "Only letters allowed";

    if (!nameRegex.test(form.lastName))
      e.lastName = "Only letters allowed";

    if (!phoneRegex.test(form.phone))
      e.phone = "Phone must be 10 digits";

    if (!emailRegex.test(form.email))
      e.email = "Invalid email";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

 

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit(form);

    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    });

    setErrors({});
  };



  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6 space-y-5">

      {formSchema.map(f => {
        const nameKey = String(f.name);

        return (
          <div key={nameKey} className="space-y-1">

            <Field
              {...f}
              value={(form as any)[f.name]}
              onChange={handleChange}
              
            />

            {errors[nameKey] && (
              <p style={{ color: "red", margin: 0 }}>
                {errors[nameKey]}
              </p>
            )}

          </div>
        );
      })}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md
               hover:bg-blue-700 transition">
        {editingUser ? "Update" : "Create"}
      </button>

    </form>
  );
}
