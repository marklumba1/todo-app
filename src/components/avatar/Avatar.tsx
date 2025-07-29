interface AvatarProps {
  name: string | undefined;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, size = 40 }) => {
  const initial = name
    ? name
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <div
      className={`flex items-center
        
        justify-center rounded bg-[#5A6ACF] text-white font-bold ${size}`}
          style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      {initial}
    </div>
  );
};

export default Avatar;
