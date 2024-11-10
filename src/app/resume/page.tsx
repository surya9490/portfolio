
import resume  from '../../assets/documents/resume.pdf'

export default function Resume() {
  return (
    <div
      style={{ height: "800px", overflow: "hidden", border: "1px solid #ccc" }}
    >
      <iframe
        src={resume}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
