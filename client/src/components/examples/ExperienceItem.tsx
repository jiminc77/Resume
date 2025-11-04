import ExperienceItem from '../ExperienceItem';

export default function ExperienceItemExample() {
  return (
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
  );
}
