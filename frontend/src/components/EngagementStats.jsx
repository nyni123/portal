export default function EngagementStats() {
  return (
    <div className="flex flex-col bg-white p-4 sm:p-6 gap-4 sm:gap-8 items-center rounded-lg shadow-lg w-full max-w-md">
      <article className="flex  sm:flex-col flex-row w-full text-left">
        <h1 className="text-sm sm:text-xs font-semibold mr-2 sm:mr-4">
          FOLLOWERS
        </h1>
        <h1 className="text-sm sm:text-xs text-gray-500">FOLLOWING</h1>
      </article>

      <article className="flex sm:flex-col flex-row w-full text-left">
        <h1 className="text-sm sm:text-xs font-semibold mr-2 sm:mr-4">
          SUBSCRIBERS
        </h1>
        <h1 className="text-sm sm:text-xs text-gray-500">SUBSCRIBING</h1>
      </article>
    </div>
  );
}
