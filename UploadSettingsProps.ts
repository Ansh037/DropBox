export interface UploadSettingsProps {
  settings: {
    destination: string;
    privacy: string;
    compression: boolean;
    allowedTypes: string[];
    maxSize: number;
  };
  onSettingsChange: (settings: any) => void;
  onClose: () => void;
}
