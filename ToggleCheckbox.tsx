import React from 'react';
import { Archive } from 'lucide-react';

export const ToggleCheckbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}) => (
  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Archive className="w-4 h-4 text-primary-600" />
      <label className="text-sm font-medium text-neutral-900">Auto Compression</label>
    </div>
    <label className="flex items-center space-x-3 p-3 border border-neutral-300 rounded-lg cursor-pointer hover:bg-neutral-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
      />
      <span className="text-sm text-neutral-700">{label}</span>
    </label>
  </div>
);
