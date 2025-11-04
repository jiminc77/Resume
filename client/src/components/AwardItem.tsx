interface AwardItemProps {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export default function AwardItem({ year, title, organization, description }: AwardItemProps) {
  return (
    <div className="mb-6" data-testid={`award-${year}-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
        <div className="flex-1">
          <h3 className="text-lg font-semibold" data-testid="text-award-title">{title}</h3>
          <p className="text-base text-muted-foreground" data-testid="text-organization">{organization}</p>
        </div>
        <div className="text-base font-medium text-muted-foreground md:text-right" data-testid="text-year">
          {year}
        </div>
      </div>
      {description && (
        <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-award-description">
          {description}
        </p>
      )}
    </div>
  );
}
