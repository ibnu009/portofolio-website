import React, { useState } from "react";

const ReadMoreText = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <p
        className={`mb-4 text-lg font-normal font-outfit text-col-secondary-font ${
          isExpanded ? "line-clamp-none" : "line-clamp-2"
        }`}
      >
        {text}
      </p>
      {/* Tombol Read More */}
      {!isExpanded && text.length > 100 && (
        <button
          className="text-neutral-500 font-outfit border-b border-neutral-700 hover:underline font-medium"
          onClick={() => setIsExpanded(true)}
        >
          Read More
        </button>
      )}
      {/* Tombol Read Less */}
      {isExpanded && (
        <button
          className="text-neutral-500 font-outfit border-b hover:underline font-medium"
          onClick={() => setIsExpanded(false)}
        >
          Read Less
        </button>
      )}
    </div>
  );
};

export default ReadMoreText;
