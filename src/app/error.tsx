"use client";

import React from "react";
import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="screen center flex-col gap-8 font-black text-primary-dim">
      <h1 className="text-7xl text-primary-dim">500 - Something went wrong</h1>

      <div>
        <p className="text-xl text-center">
          Oops, an unexpected error occurred  :/
        </p>

        <div className="flex flex-col items-center gap-4 mt-4">
          <button
            onClick={reset}
            className="text-tertiary underline hover-scale click"
          >
            Try Again
          </button>

          <Link href="/" className="text-center">
            <p className="text-tertiary underline hover-scale click">
              Go back to Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
