The UploadSettings component is a React-based UI module that provides a comprehensive interface for configuring file upload parameters. It offers users control over various upload settings including destination folder, privacy levels, compression options, file size limits, and allowed file types.

Features
Destination Selection: Choose where uploaded files will be stored

Privacy Settings: Control file visibility (Private/Unlisted/Public)

Compression Toggle: Option to automatically compress images

File Size Limits: Set maximum upload size (10MB to 500MB)

File Type Restrictions: Select which file types are allowed

Responsive Design: Adapts to different screen sizes

User-Friendly UI: Clean interface with intuitive icons and labels

Props
The component accepts the following props:

settings (Object): Current upload configuration containing:

destination (string): Upload target folder

privacy (string): File visibility setting

compression (boolean): Whether compression is enabled

allowedTypes (string[]): Array of permitted file types

maxSize (number): Maximum file size in bytes

onSettingsChange (Function): Callback when any setting is modified

onClose (Function): Callback when the settings panel should be closed

Technical Details
Helper Functions
updateSetting(key, value)

Updates a specific setting while preserving others

Triggers the onSettingsChange callback with the new settings

formatFileSize(bytes)

Converts bytes to human-readable format (KB, MB, GB)

Used to display the current file size limit

UI Structure
The component is organized into several sections:

Header

Displays the title with a settings icon

Includes a close button (X icon)

Main Settings Grid (2 columns on medium+ screens)

Destination dropdown (Root, Documents, Images, Videos, Shared)

Privacy dropdown (Private, Unlisted, Public)

Compression toggle switch

Maximum file size selector

File Types Section

Checkbox grid of allowed file types (Images, Videos, Audio, etc.)

Supports selecting multiple file types

Styling
The component uses a clean, modern design with:

Neutral color palette with primary color accents

Subtle animations (slide-in effect)

Consistent spacing and rounded corners

Focus states for interactive elements

Responsive layout that stacks on mobile

Dependencies
React

Lucide React icons (X, Settings, Shield, Folder, Archive)

This component is designed to be reusable and can be integrated into any file upload interface that requires configurable upload parameters.
