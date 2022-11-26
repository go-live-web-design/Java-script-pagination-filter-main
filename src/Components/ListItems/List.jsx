import Card from "./Card";

function List({ chars }) {
  const selectedChars = chars[0].slice(0, 8);
  return (
    <div>
      <div className="text-white flex flex-wrap justify-center p-5">
        {selectedChars?.map((char) => {
          return <Card key={char?.id} char={char} />;
        })}
      </div>
    </div>
  );
}

export default List;
