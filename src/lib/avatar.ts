import crypto from 'crypto';

export function generateGravatarHashURL(email: string): string {
  const trimmedEmail = email.trim().toLowerCase();
  const hash = crypto.createHash('sha256').update(trimmedEmail).digest('hex');

  return hash;
}

const DEFAULT_AVATAR_SIZE = 80;

export function getUserAvatarFallbackURL(name: string, size: number = DEFAULT_AVATAR_SIZE): string {
  const fallbackProviderBaseUrl = 'https://ui-avatars.com/api/'

  const fallbackProvider = new URL(fallbackProviderBaseUrl)
  fallbackProvider.searchParams.append('name', name)
  fallbackProvider.searchParams.append('background', 'ff5100')
  fallbackProvider.searchParams.append('color', 'fff')
  fallbackProvider.searchParams.append('bold', 'true')
  fallbackProvider.searchParams.append('size', size.toString())
  fallbackProvider.searchParams.append('uppercase', 'true')
  fallbackProvider.searchParams.append('format', 'svg')

  const fallbackImageUrl = fallbackProvider.toString();

  return fallbackImageUrl;
}

export function getUserAvatarURL(email: string, size: number = DEFAULT_AVATAR_SIZE): string {
  const gravatarBaseUrl = 'https://www.gravatar.com';
  const fallbackImageUrl = getUserAvatarFallbackURL(email, size);

  const hash = generateGravatarHashURL(email);

  const gravatarProvider = new URL(`avatar/${hash}`, gravatarBaseUrl);
  gravatarProvider.searchParams.append('s', size.toString());
  gravatarProvider.searchParams.append('d', fallbackImageUrl);

  const gravatarImageUrl = gravatarProvider.toString();

  console.log(gravatarImageUrl);

  return gravatarImageUrl;
}