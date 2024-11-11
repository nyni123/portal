export default function Stats() {
  return (
    <div className="flex flex-col bg-white p-4 gap-4 items-center rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-left w-full text-lg font-semibold">STATISTICS</h1>
      <article className="flex sm:flex-col flex-row justify-stretch gap-3 w-full">
        <aside className="flex-1">
          <h1 className="text-center text-2xl sm:text-lg font-semibold">0</h1>
          <p className="text-center text-xs text-gray-600">FOLLOWERS</p>
        </aside>
        <aside className="flex-1">
          <h1 className="text-center text-2xl sm:text-lg font-semibold">0</h1>
          <p className="text-center text-xs text-gray-600">SUBSCRIBERS</p>
        </aside>
        <aside className="flex-1">
          <h1 className="text-center text-2xl sm:text-lg font-semibold">0</h1>
          <p className="text-center text-xs text-gray-600">
            CONTRIBUTED INDICATORS
          </p>
        </aside>
      </article>
    </div>
  );
}
