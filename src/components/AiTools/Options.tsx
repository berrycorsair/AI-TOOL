'use client';

interface OptionsProps {
  values: (string | number)[];
  title: string;
  name: string;
  selected: string | number;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Options({ values, title, name, selected, handleChange }: OptionsProps) {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="pb-4 block">
        {title}
      </label>
      <select
        id={name}
        name={name}
        value={selected}
        onChange={handleChange}
        className="w-full rounded-lg border border-white/[0.12] bg-dark-7 px-5 py-3 text-white outline-hidden focus:border-purple"
        required
      >
        <option value="">Select option</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}