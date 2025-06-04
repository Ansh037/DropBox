import React from 'react';

const FILE_TYPES = [
  { value: 'image/*', label: 'Images' },
  { value: 'video/*', label: 'Videos' },
  { value: 'audio/*', label: 'Audio' },
  { value: 'application/pdf', label: 'PDF' },
  { value: '.doc,.docx', label: 'Documents' },
  { value: '.xls,.xlsx', label: 'Spreadsheets' },
  { value: '.ppt,.pptx', label: 'Presentations' },
  { value: '.zip,.rar', label: 'Archives' },
];

export const AllowedFileTypes = ({
  selectedTypes,
  onChange,
}: {
  selectedTypes: string[];
  onChange: (types: string[]) => void;
}) => {
  const toggleType = (type: string, checked: boolean) => {
    const updated = checked
      ? [...selectedTypes, type]
      : selectedTypes.filter((t) => t !== type);
    onChange(updated);
  };

  return (
    <div className="mt-6 space-y-3">
      <label className="text-sm font-medium text-neutral-900">Allowed File Types</label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {FILE_TYPES.map((type) => (
          <label key={type.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type.value)}
              onChange={(e) => toggleType(type.value, e.target.checked)}
              className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
            />
            <span className="text-sm text-neutral-700">{type.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
