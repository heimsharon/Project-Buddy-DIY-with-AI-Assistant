export interface AvatarImageProps {
  avatarUrl?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
  alt?: string;
}

const DEFAULT_AVATAR_SRC = '/default-avatar.svg';

export default function AvatarImage({
  avatarUrl,
  name,
  size = 96,
  className,
  alt,
}: AvatarImageProps) {

  const trimmedAvatarUrl = avatarUrl?.trim();
  const trimmedName = name?.trim();

  const safeAvatarUrl = trimmedAvatarUrl || DEFAULT_AVATAR_SRC;
  const safeSize = Number.isFinite(size) && size > 0 ? Math.round(size) : 96;
  const altText = alt ?? (trimmedName ? `${trimmedName} avatar` : 'User avatar');

  return (
    <img
      src={safeAvatarUrl}
      alt={altText}
      className={className}
      width={safeSize}
      height={safeSize}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        const img = e.currentTarget;
        if (img.dataset.fallbackApplied === 'true')
          return;
        img.dataset.fallbackApplied = 'true';
        img.src = DEFAULT_AVATAR_SRC;
      }}
    />
  );
}