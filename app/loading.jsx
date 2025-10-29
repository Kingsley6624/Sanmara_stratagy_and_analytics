export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-gray-500 animate-pulse">Loading...</p>
    </div>
  );
}
