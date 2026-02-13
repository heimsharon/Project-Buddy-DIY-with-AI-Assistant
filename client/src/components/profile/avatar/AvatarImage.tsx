export interface AvatarImageProps = {
  avatarUrl?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
} 

const DEFAULT_AVATAR_SRC = '/default-avatar.svg';

export default function AvatarImage({
  avatarUrl,
  name,
  size = 96,
  className,
}: AvatarImageProps) {
  const safeAvatarUrl = avatarUrl?.trim() ? avatarUrl : DEFAULT_AVATAR_SRC;
  const altText = name?.trim() ? `${name} avatar` : 'User avatar';

  return (
    <img
      src={safeAvatarUrl}
      alt={altText}
      className={className}
      width={size}
      height={size}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.src = DEFAULT_AVATAR_SRC;
      }}
    />
  );
}