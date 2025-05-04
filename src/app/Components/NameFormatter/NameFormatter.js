// components/NameFormatter.tsx
"use client";

export const nameFormatter = (params) => {
  const [japaneseName, romanizedName] = params.value.split(' - ');
  return {
    displayValue: japaneseName,
    tooltip: romanizedName
  };
};
