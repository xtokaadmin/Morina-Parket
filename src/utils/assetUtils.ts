/**
 * Helper function to get the correct asset path
 * This handles both development and production environments
 */
export function getAssetPath(relativePath: string): string {
  // If the path already starts with http or https, it's an external URL
  if (relativePath.startsWith("http")) {
    return relativePath;
  }

  // For local assets, ensure they're properly referenced
  // Remove leading slash if present
  const cleanPath = relativePath.startsWith("/")
    ? relativePath.substring(1)
    : relativePath;

  // In development, we can use the assets directly
  return cleanPath;
}
