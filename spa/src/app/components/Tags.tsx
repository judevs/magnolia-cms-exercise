const Tags = ({ tags }: { tags: string[] }) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-[#fff] text-[#4D4D4D] rounded-full text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
