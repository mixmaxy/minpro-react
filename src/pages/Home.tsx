import { useUsers } from "../hooks";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";

export default function HomePage() {
  const {
    users,
    currentPage,
    totalPages,
    total,
    loading,
    error,
    setCurrentPage,
  } = useUsers();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 via-fuchsia-50/20 to-zinc-50">
      {/* Hero section */}
      <div className="bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-700 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
                Live Data from ReqRes API
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-zinc-900 mb-2">
              User Directory
            </h1>
            <p className="text-zinc-500 text-base max-w-xl">
              Browse and explore all registered users. Click any card to view
              their full profile.
            </p>
          </div>

          {/* Stats */}
          {!loading && !error && (
            <div className="flex flex-wrap gap-4 mt-6 animate-fade-up delay-200">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                <svg
                  className="w-4 h-4 text-fuchsia-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="text-sm font-medium text-zinc-700">
                  {total} total users
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                <svg
                  className="w-4 h-4 text-fuchsia-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span className="text-sm font-medium text-zinc-700">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Error state */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-800 mb-2">
              Something went wrong
            </h3>
            <p className="text-zinc-500 text-sm mb-5">{error}</p>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-5 py-2.5 rounded-xl bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-700 transition-colors shadow-sm"
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-zinc-100" />
                  <div className="flex-1">
                    <div className="h-4 bg-zinc-100 rounded-lg mb-2 w-3/4" />
                    <div className="h-3 bg-zinc-100 rounded-lg w-1/2" />
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-zinc-50 flex justify-between">
                  <div className="h-3 bg-zinc-100 rounded w-12" />
                  <div className="h-3 bg-zinc-100 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Users grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <UserCard key={user.id} user={user} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
}
