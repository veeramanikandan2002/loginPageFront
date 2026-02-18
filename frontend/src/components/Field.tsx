type Props = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Field({ label, name, type, value, onChange }: Props) {
  return (
    <div className="w-full border border-gray-300 rounded-md px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500">
      <label className="block text-sm font-medium text-gray-600">{label}</label>
      <input
        name={name}
        type={type}
        value={value || ""}
        onChange={onChange}
      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2
    focus:ring-blue-500 focus:border-blue-500 transition
  "/>
    </div>
  );
}
