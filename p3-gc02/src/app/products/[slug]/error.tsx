"use client";

type ProductDetaulErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ProductDetailError({
  error,
  reset,
}: ProductDetaulErrorProps) {
  console.log(error);
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1>Oops, </h1>
      <h3>{error.message}</h3>
      <button className=" bg-blue-900 p-3 rounded-md mt-5" onClick={()=> {
        reset()
      }}>Reset</button>
    </div>
  );
}
