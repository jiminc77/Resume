import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
  skills: string[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <Badge 
          key={index} 
          variant="secondary" 
          className="text-base px-4 py-1.5 rounded-full"
          data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
