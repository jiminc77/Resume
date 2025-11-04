import { useRef } from "react";
import ResumeHeader from "@/components/ResumeHeader";
import SectionTitle from "@/components/SectionTitle";
import EducationItem from "@/components/EducationItem";
import ExperienceItem from "@/components/ExperienceItem";
import AwardItem from "@/components/AwardItem";
import SkillsSection from "@/components/SkillsSection";

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    console.log("PDF download triggered");
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-12 px-6 md:px-8">
      <div 
        ref={resumeRef}
        className="max-w-4xl mx-auto"
        data-testid="container-resume"
      >
        <ResumeHeader
          name="Jimin Jeon"
          email="jiminc77@gm.gist.ac.kr"
          linkedin="https://www.linkedin.com/in/jimin-jeon-87782a283/"
          github="https://github.com/jiminc77"
          onDownload={handleDownloadPDF}
        />

        <section className="mb-12">
          <SectionTitle>Education</SectionTitle>
          <EducationItem
            institution="Gwangju Institute of Science and Technology (GIST)"
            degree="Bachelor of Science"
            major="Electrical Engineering and Computer Science"
            duration="Mar 2021 - Mar 2027"
            gpa="3.8/4.5"
            description="Currently in 4th year, 1st semester (leave of absence planned for next semester)"
          />
          <EducationItem
            institution="Korea Advanced Institute of Science and Technology (KAIST)"
            degree="Computer Science"
            major="Immersion Camp"
            duration="Jul 2023 - Aug 2023"
            description="Intensive programming and startup"
          />
          <EducationItem
            institution="University of California, Berkeley"
            degree="Computer Science"
            major="UC Berkeley Summer Sessions"
            duration="Jun 2022 - Aug 2022"
          />
        </section>

        <section className="mb-12">
          <SectionTitle>Experience</SectionTitle>
          <ExperienceItem
            title="Undergraduate Intern"
            company="Gwangju Institute of Science and Technology"
            duration="Sep 2025 - Present · 3 mos"
            location="GIST AI - AILAB (Prof. Kyoobin Lee)"
            achievements={[
              "Led the training of a Mobile ALOHA robot for electrical panel tasks using an end-to-end imitation learning pipeline with the ACT model.",
              "Achieved autonomous, high-precision manipulation, including operating switches, measuring voltage, and unplugging wires."
            ]}
          />
          <ExperienceItem
            title="AI Developer"
            company="PIASPACE"
            duration="Jun 2025 - Aug 2025 · 3 mos"
            location="Intern"
            achievements={[
              "Proposed a new method introducing learnable similarity for CLIP-based encoders, which outperformed existing adapters and improved the company's production model."
            ]}
          />
          <ExperienceItem
            title="Undergraduate Intern"
            company="Gwangju Institute of Science and Technology"
            duration="Dec 2022 - Jun 2023 · 7 mos"
            location="GIST AI - AILAB (Prof. Kyoobin Lee)"
            achievements={[
              "Developed an image-based model to automatically detect and mask vehicle scratches before and after car rentals.",
              "Built a system to detect, mask, and crop expiration date regions from food packaging and accurately recognize only the expiration text across various formats."
            ]}
          />
          <ExperienceItem
            title="Student Researcher"
            company="NAVER D2SF"
            duration="Mar 2022 - Feb 2023 · 1 yr"
            location="Freelance"
            achievements={[
              "Worked as a NAVER D2SF Campus Partner, responsible for sourcing university-based startup teams and analyzing startup trends in Korea.",
            ]}
          />
        </section>

        <section className="mb-12">
          <SectionTitle>Awards & Honors</SectionTitle>
          <AwardItem
            year="2025"
            title="Impact AI Hackathon - GIST AI Lab Director's Award"
            organization="Gwangju Institute of Science and Technology"
          />
          <AwardItem
            year="2024"
            title="Defense Start-up Challenge - Innovation Award"
            organization="Ministry of National Defense"
            description="Founder of '든든行' (Hospital Companion Manager Matching Platform)"
          />
          <AwardItem
            year="2024"
            title="11th Army Startup Competition - Excellence Award"
            organization="Republic of Korea Army"
            description="Founder of '든든行' (Hospital Companion Manager Matching Platform)"
          />
        </section>

        <section className="mb-12">
          <SectionTitle>Teaching Experience</SectionTitle>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Teaching Assistant</h3>
            <p className="text-base text-foreground mb-1">
              AI5213/EC4213 Machine Learning and Deep Learning
            </p>
            <p className="text-base text-muted-foreground">
              Sep 2025 - Dec 2025
            </p>
          </div>
        </section>

        <section className="mb-12">
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsSection skills={["Python", "PyTorch", "ROS"]} />
        </section>
      </div>

      <style>{`
        @media print {
          body {
            background: white !important;
          }
          button {
            display: none !important;
          }
          .max-w-4xl {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
