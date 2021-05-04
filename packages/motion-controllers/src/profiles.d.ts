export as namespace Profiles;

export function fetchProfilesList(basePath: string): Promise<{ [key: string]: string }>;
export function fetchProfile(
  xrInputSource: object,
  basePath: string,
  defaultProfileId?: string,
  getAssetPath?: boolean,
  profilePriorities?: string[]
): Promise<{ profile: object; assetPath?: string }>;
