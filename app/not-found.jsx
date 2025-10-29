export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center  mt-[3.1rem]">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <a href="/" className="text-blue-600 underline">
        Go back home
      </a>
    </div>
  );
}