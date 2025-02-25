import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="bg-white py-8 sm:py-16 overflow-hidden">
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 lg:max-w-none max-w-2xl">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="font-semibold text-indigo-600 text-base leading-7">
                  About Page
                </h2>
                <p className="mt-2 font-bold text-gray-900 text-3xl sm:text-4xl tracking-tight">
                  This page has some errors
                </p>
                <p className="mt-6 text-gray-600 text-lg leading-8">
                  Not only is this page throwing a 404 error we need to resolve
                  but there's some code erros on this page as well.
                </p>
                <dl className="space-y-8 mt-10 lg:max-w-none max-w-xl text-gray-600 text-base leading-7">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="top-1 left-1 absolute w-5 h-5 text-indigo-600"
                      >
                        <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                        <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                        <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                      </svg>
                      Template driven
                    </dt>
                    <dd className="inline">
                      Inspired by Sendgrid, Mailchimp, and Postmark, we allow
                      you to create and apply templated content to your media.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="top-1 left-1 absolute w-5 h-5 text-indigo-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Simple, REST
                    </dt>
                    <dd className="inline">
                      A simple REST API that allows you to create, generate, and
                      manage your content.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="top-1 left-1 absolute w-5 h-5 text-indigo-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                      </svg>
                      Developer friendly{" "}
                    </dt>
                    <dd className="inline">
                      Documented and easy to use, we make it easy to integrate
                      with your existing workflow.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/thank-you"
                  className="flex justify-center items-center bg-indigo-100 hover:bg-indigo-200 px-8 md:px-10 py-3 md:py-4 border border-transparent rounded-md w-full font-medium text-gray-800 text-base md:text-lg"
                >
                  Thank You
                </a>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              className="shadow-xl md:-ml-4 lg:-ml-0 rounded-xl ring-1 ring-gray-400/10 w-[48rem] sm:w-[57rem] max-w-none"
              alt="Picture"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
