interface EducationItemProps {
  institution: string;
  degree: string;
  major: string;
  duration: string;
  gpa?: string;
  description?: string;
}

export default function EducationItem({ 
  institution, 
  degree, 
  major, 
  duration, 
  gpa,
  description 
}: EducationItemProps) {
  return (
    <div className="mb-6" data-testid={`education-${institution.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
        <div className="flex-1">
          <h3 className="text-lg font-semibold" data-testid="text-institution">{institution}</h3>
          <p className="text-base text-foreground" data-testid="text-degree">
            {degree} - {major}
          </p>
        </div>
        <div className="text-base font-medium text-muted-foreground md:text-right" data-testid="text-duration">
          {duration}
        </div>
      </div>
      {gpa && (
        <p className="text-base font-mono text-muted-foreground mb-1" data-testid="text-gpa">
          GPA: {gpa}
        </p>
      )}
      {description && (
        <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-description">
          {description}
        </p>
      )}
    </div>
  );
}
