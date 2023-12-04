import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <div className="body-dark:bg-black body-dark:text-white body-light:bg-white body-light:text-black">
        <h1 className="next-error-h1 inline-block m-0 mr-5 pr-5 text-2xl font-semibold align-top leading-7 border-r border-solid border-opacity-30">
          404
        </h1>
        <div className="inline-block">
          <h2 className="text-base font-normal leading-7 m-0">
            This page could not be found.
          </h2>
        </div>
      </div>
    </div>
  );
}
