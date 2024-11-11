import Button from "./Button";

export default function Groups() {
  return (
    <div className="flex flex-col bg-white p-4 gap-4 items-center rounded-lg shadow-lg w-full max-w-md">
      <section className="flex justify-between w-full items-center">
        <h1 className="text-lg font-semibold">GROUPS</h1>
        <Button className="text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
          +
        </Button>
      </section>

      <section className="flex w-full">
        {!true ? (
          <p className="text-gray-600 text-left w-full">No Groups</p>
        ) : (
          <ul className="flex flex-col gap-2 w-full items-start text-left">
            <li>
              <button className="text-blue-500 hover:underline">Group1</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">Group2</button>
            </li>
            <li>
              <button className="text-blue-500 hover:underline">Group3</button>
            </li>
          </ul>
        )}
      </section>
    </div>
  );
}
