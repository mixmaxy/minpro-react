import { useParams, useNavigate, Link } from "react-router-dom";
import { useUserDetail } from "../hooks";

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, loading, error } = useUserDetail(id);

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 via-fuchsia-50/20 to-zinc-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Users
        </button>

        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden animate-pulse">
            <div className="h-36 bg-linear-to-br from-zinc-100 to-zinc-50" />
            <div className="px-8 pb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12 mb-6">
                <div className="w-24 h-24 rounded-2xl bg-zinc-200 ring-4 ring-white" />
                <div className="flex-1 space-y-2 pb-1 text-center sm:text-left">
                  <div className="h-6 bg-zinc-100 rounded-lg w-48 mx-auto sm:mx-0" />
                  <div className="h-4 bg-zinc-100 rounded-lg w-32 mx-auto sm:mx-0" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-16 bg-zinc-50 rounded-xl" />
                <div className="h-16 bg-zinc-50 rounded-xl" />
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-zinc-100 shadow-sm animate-fade-in">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-zinc-800 mb-2">User not found</h3>
            <p className="text-zinc-500 text-sm mb-5">{error}</p>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-700 transition-colors shadow-sm"
            >
              Go to User List
            </Link>
          </div>
        )}

        {/* User card */}
        {user && !loading && (
          <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden animate-fade-up">
            {/* Cover */}
            <div className="h-36 bg-linear-to-br from-fuchsia-500 via-purple-500 to-indigo-500 relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />
              {/* ID badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30">
                ID #{user.id}
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-8">
              {/* Avatar + name */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-8 mb-8">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-white" />
                </div>
                <div className="text-center sm:text-left flex-1 pb-1">
                  <h1 className="font-display text-2xl font-bold text-zinc-900">
                    {user.first_name} {user.last_name}
                  </h1>
                  <p className="text-zinc-500 text-sm mt-0.5">{user.email}</p>
                </div>
              </div>

              {/* Info rows */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-fuchsia-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 mb-0.5">
                      Email address
                    </p>
                    <p className="text-sm font-medium text-zinc-800">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 mb-0.5">Full name</p>
                    <p className="text-sm font-medium text-zinc-800">
                      {user.first_name} {user.last_name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 mb-0.5">User ID</p>
                    <p className="text-sm font-medium text-zinc-800">
                      #{user.id}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  to="/"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-200 text-zinc-700 text-sm font-medium hover:bg-zinc-50 transition-colors"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  All Users
                </Link>
                <a
                  href={`mailto:${user.email}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-700 transition-colors shadow-sm shadow-fuchsia-200"
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
