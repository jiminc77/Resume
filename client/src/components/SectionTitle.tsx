interface SectionTitleProps {
  children: string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-semibold uppercase tracking-wide mb-6 pb-2 border-b">
      {children}
    </h2>
  );
}
