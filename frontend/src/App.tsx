import { useEffect, useState } from "react";
import type { User } from "./types/User";
import * as api from "./api/userApi";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editing, setEditing] = useState<User | null>(null);

  const load = async () => {
    const res = await api.getUsers();
    setUsers(res.data.data);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async (data: User) => {
    if (editing?._id) {
      await api.updateUser(editing._id, data);
      setEditing(null);
    } else {
      await api.createUser(data);
    }
    load();
  };

  const remove = async (id: string) => {
    await api.deleteUser(id);
    load();
  };

  return (
    <div >
      <h2 className="flex justify-center font-bold text-[18px]">User Login Form</h2>

      <UserForm
        onSubmit={save}
        editingUser={editing}
      />

      <UserList
        users={users}
        onEdit={setEditing}
        onDelete={remove}
      />
    </div>
  );
}
