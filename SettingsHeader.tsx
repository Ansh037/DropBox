import React from 'react';
import { Settings, X } from 'lucide-react';

export const SettingsHeader = ({ onClose }: { onClose: () => void }) => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center space-x-2">
      <Settings className="w-5 h-5 text-primary-600" />
      <h3 className="text-lg font-semibold text-neutral-900">Upload Settings</h3>
    </div>
    <button
      onClick={onClose}
      className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);
