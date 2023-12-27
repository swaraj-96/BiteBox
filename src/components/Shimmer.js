const Shimmer = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="w-full bg-gray-300 dark:bg-[#1E2836] rounded-md aspect-video min-h-[180px] object-cover block card-img relative"></div>

      <h2 className="text-lg font-semibold mt-2 h-4 rounded-md bg-gray-300 dark:bg-[#1E2836]"></h2>
      <div className="flex items-center gap-2 w-1/3 h-2 rounded-md bg-gray-300 dark:bg-[#1E2836]"></div>
    </div>
  );
};

export default Shimmer;
