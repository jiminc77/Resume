import ResumeHeader from '../ResumeHeader';

export default function ResumeHeaderExample() {
  return (
    <ResumeHeader
      name="Jimin Jeon"
      email="jiminc77@gm.gist.ac.kr"
      linkedin="https://www.linkedin.com/in/jimin-jeon-87782a283/"
      github="https://github.com/jiminc77"
      onDownload={() => console.log('Download PDF triggered')}
    />
  );
}
