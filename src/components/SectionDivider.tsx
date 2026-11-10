import React from 'react';

interface SectionDividerProps {
  coord: string;
  index: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ coord, index }) => {
  return (
    <div className="section-divider-bar my-6 sm:my-12" aria-hidden="true">
      <span className="font-mono text-xs tracking-wider text-[#a3a3a3]">
        {coord}
      </span>
      <span className="divider-line" />
      <span className="font-mono text-xs tracking-wider text-[#737373]">
        {index}
      </span>
    </div>
  );
};

