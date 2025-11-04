import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumeHeaderProps {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  onDownload: () => void;
}

export default function ResumeHeader({ name, email, linkedin, github, onDownload }: ResumeHeaderProps) {
  return (
    <header className="border-b pb-8 mb-12">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-name">{name}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <a 
              href={`mailto:${email}`} 
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
            <span className="text-border">|</span>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="text-border">|</span>
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              data-testid="link-github"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
        <Button 
          onClick={onDownload} 
          variant="default"
          className="gap-2"
          data-testid="button-download-pdf"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </div>
    </header>
  );
}
