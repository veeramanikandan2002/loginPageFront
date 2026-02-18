import type { User } from "../types/User";

type Props = {
  users: User[];
  onEdit: (u: User) => void;
  onDelete: (id: string) => void;
};

export default function UserList({ users, onEdit, onDelete }: Props) {
  if (!users.length)
    return <p className="text-center mt-6 text-gray-500">No users</p>;

  const cols = Object.keys(users[0]).filter(
  k => !["_id", "createdAt", "updatedAt", "__v"].includes(k)
);

  return (
    <div className="max-w-5xl mx-auto mt-8">

      <div className="overflow-x-auto shadow rounded-lg">

        <table className="min-w-full bg-white border border-gray-200">

          {/* ===== HEADER ===== */}
          <thead className="bg-gray-100">
            <tr>
              {cols.map(c => (
                <th
                  key={c}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b"
                >
                  {c[0].toUpperCase() + c.slice(1)}

                </th>
              ))}

              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">
                Actions
              </th>
            </tr>
          </thead>

          
          <tbody className="divide-y">

            {users.map(u => (
              <tr key={u._id} className="hover:bg-gray-50">

                {cols.map(c => (
                  <td
                    key={c}
                    className="px-4 py-3 text-sm text-gray-700"
                  >
                    {(u as any)[c]}
                  </td>
                ))}

                <td className="px-4 py-3 text-center space-x-2">

                  <button
                    onClick={() => onEdit(u)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded
                               hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(u._id!)}
                    className="bg-red-600 text-white px-3 py-1 rounded
                               hover:bg-red-700 transition"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
