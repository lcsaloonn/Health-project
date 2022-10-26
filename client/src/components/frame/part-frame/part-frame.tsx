import "./part-frame.scss";

const PartFrame = ({ title }: { title: string }) => {
  return (
    <div className="frame-title" data-testid="title">
      {title}
    </div>
  );
};
export default PartFrame;
