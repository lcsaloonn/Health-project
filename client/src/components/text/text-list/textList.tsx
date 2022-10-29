import "./text-list.scss";

const TextList = ({ list }: { list: { id: string; text: string }[] }) => {
  return (
    <ol className="text-list grid gap-x-2 gap-y-4 grid-cols-8 xl:grid-cols-12">
      {list.map((element: { id: string; text: string }, id: number) => (
        <li
          className="text-list-item col-span-8 md:col-start-2 md:col-end-8 xl:col-start-3 xl:col-end-11"
          key={id}
        >
          <span className="text-list-item-text"> {element.text}</span>
        </li>
      ))}
    </ol>
  );
};
export default TextList;
