import React from 'react';
import { Folder, Shield } from 'lucide-react';
import { UploadSettingsProps } from '../types/UploadSettingsProps';
import { SettingsHeader } from './SettingsHeader';
import { SettingDropdown } from './SettingDropdown';
import { ToggleCheckbox } from './ToggleCheckbox';
import { AllowedFileTypes } from './AllowedFileTypes';

export const UploadSettings: React.FC<UploadSettingsProps> = ({
  settings,
  onSettingsChange,
  onClose,
}) => {
  const updateSetting = (key: string, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const formatFileSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 animate-slide-in">
      <SettingsHeader onClose={onClose} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SettingDropdown
          label="Destination"
          icon={Folder}
          value={settings.destination}
          onChange={(val) => updateSetting('destination', val)}
          options={[
            { value: 'root', label: 'Root Folder' },
            { value: 'documents', label: 'Documents' },
            { value: 'images', label: 'Images' },
            { value: 'videos', label: 'Videos' },
            { value: 'shared', label: 'Shared' },
          ]}
        />

        <SettingDropdown
          label="Privacy"
          icon={Shield}
          value={settings.privacy}
          onChange={(val) => updateSetting('privacy', val)}
          options={[
            { value: 'private', label: 'Private' },
            { value: 'unlisted', label: 'Unlisted' },
            { value: 'public', label: 'Public' },
          ]}
        />

        <ToggleCheckbox
          label="Automatically compress images to reduce file size"
          checked={settings.compression}
          onChange={(val) => updateSetting('compression', val)}
        />

        <div className="space-y-3">
          <label className="text-sm font-medium text-neutral-900">Maximum File Size</label>
          <select
            value={settings.maxSize}
            onChange={(e) => updateSetting('maxSize', parseInt(e.target.value))}
            className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {[10, 25, 50, 100, 500].map((mb) => (
              <option key={mb} value={mb * 1024 * 1024}>
                {mb} MB
              </option>
            ))}
          </select>
          <p className="text-xs text-neutral-600">
            Current limit: {formatFileSize(settings.maxSize)}
          </p>
        </div>
      </div>

      <AllowedFileTypes
        selectedTypes={settings.allowedTypes}
        onChange={(types) => updateSetting('allowedTypes', types)}
      />
    </div>
  );
};
