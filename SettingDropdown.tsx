import React from 'react';

export const SettingDropdown = ({
  label,
  icon: Icon,
  value,
  options,
  onChange,
}: {
  label: string;
  icon: React.ElementType;
  value: string | number;
  options: { label: string; value: any }[];
  onChange: (val: any) => void;
}) => (
  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Icon className="w-4 h-4 text-primary-600" />
      <label className="text-sm font-medium text-neutral-900">{label}</label>
    </div>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
