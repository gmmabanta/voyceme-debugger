import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="mx-auto mt-12 sm:mt-6 lg:mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex lg:flex lg:flex-row flex-col lg:flex-justify gap-3 mx-auto my-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:text-left sm:text-center">
            <h1 className="font-extrabold text-gray-800 text-4xl sm:text-5xl md:text-6xl tracking-tight">
              <span className="block xl:inline">Welcome to the </span>
              <span className="block xl:inline text-indigo-600">Bug Bash!</span>
            </h1>
            <p className="sm:mx-auto lg:mx-0 mt-3 sm:mt-5 md:mt-5 sm:max-w-xl text-gray-500 text-base sm:text-lg md:text-xl">
              Now that you've got this page working click the about the bash
              link to learn more
            </p>

            <div className="sm:flex sm:justify-center lg:justify-start mt-5 sm:mt-8">
              <div className="mx-auto max-w-7xl">
                <div className="group relative cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 opacity-25 group-hover:opacity-100 rounded-lg transition duration-1000 group-hover:duration-200 blur"></div>
                  <div className="relative flex justify-start items-top space-x-6 bg-white px-7 py-6 rounded-lg ring-1 ring-gray-900/5 leading-none">
                    <div className="space-y-2">
                      <p className="text-slate-800">
                        <a href="/about">About the bash</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:right-0 lg:inset-y-0 my-4 lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              className="w-full lg:w-full h-56 sm:h-72 md:h-96 lg:h-full object-cover"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
