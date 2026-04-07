import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-zinc-50 via-fuchsia-50/20 to-zinc-50 px-4 text-center">
      <div className="animate-fade-up">
        <p className="font-display text-[120px] sm:text-[160px] font-bold text-zinc-100 leading-none select-none">
          404
        </p>
        <div className="-mt-6 relative z-10">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            Page not found
          </h1>
          <p className="text-zinc-500 max-w-sm mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-fuchsia-600 text-white font-medium hover:bg-fuchsia-700 transition-colors shadow-md shadow-fuchsia-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
