import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mt-2 text-4xl font-bold text-neutral-900 tracking-tight sm:text-5xl">
          404
        </h1>
        <p className="mt-2 text-base font-semibold text-primary-500">Page not found</p>
        <p className="mt-4 text-base text-neutral-600 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Home className="mr-2 h-5 w-5" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;