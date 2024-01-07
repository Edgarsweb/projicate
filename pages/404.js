import Link from "next/link";

const pageNotFound = () => {
  return (
    <>
      <h1>It looks like you&apos;re lost in space</h1>
     <Link href={`/`}>Go back home</Link>
    </>
  );
};

export default pageNotFound;
