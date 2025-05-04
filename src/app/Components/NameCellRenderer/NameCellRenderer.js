'use client';

export default function NameCellRenderer({ value }) {
  const [japaneseName, romanizedName] = value.split(' - ');
  return (
    <span title={romanizedName}>
      {japaneseName}
    </span>
  );
}
