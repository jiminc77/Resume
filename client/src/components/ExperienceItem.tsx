interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location?: string;
  achievements: string[];
}

export default function ExperienceItem({ 
  title, 
  company, 
  duration, 
  location,
  achievements 
}: ExperienceItemProps) {
  return (
    <div className="mb-8" data-testid={`experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
        <div className="flex-1">
          <h3 className="text-lg font-semibold" data-testid="text-title">{title}</h3>
          <p className="text-base text-foreground" data-testid="text-company">{company}</p>
          {location && (
            <p className="text-sm text-muted-foreground" data-testid="text-location">{location}</p>
          )}
        </div>
        <div className="text-base font-medium text-muted-foreground md:text-right" data-testid="text-duration">
          {duration}
        </div>
      </div>
      <ul className="space-y-2 pl-6">
        {achievements.map((achievement, index) => (
          <li 
            key={index} 
            className="text-base leading-relaxed list-disc"
            data-testid={`text-achievement-${index}`}
          >
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
}
