import Image from "next/image";

export default function thankyou() {
  return (
    <div>
      <section className="mx-auto mt-12 sm:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex lg:flex lg:flex-row flex-col lg:flex-justify gap-3 mx-auto my-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="sm:text-left lg:text-left">
            <h1 className="font-extrabold text-gray-800 text-4xl sm:text-5xl md:text-6xl tracking-tight">
              <span className="block inline">Thank you for doing the</span>
              <span className="block inline text-indigo-600"> Bug bash!</span>
            </h1>
            <p className="sm:mx-auto lg:mx-0 mt-3 mt-5 text-gray-500 sm:text-lg md:text-xl text-left">
              We appreciate your time and effort in helping us improve our
              product.
            </p>
          </div>
        </div>
        <div className="mx-auto my-4 lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            className="w-full lg:w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover"
            alt="Picture of the author"
            priority
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
