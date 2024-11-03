const features = [
  {
    name: <p className="tw-inline"><a href="https://rdm-os-cs-vu.github.io/open-handbook/topics.html">Topics</a></p>,
    description: "Find all the topics about research data management and open science.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-sky-600 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    name: <p className="tw-inline"><a href="https://rdm-os-cs-vu.github.io/open-handbook/guides.html">Guides</a></p>,
    description: "Some guides by the university lib.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-sky-600 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
  },
  {
    name: <p className="tw-inline"><a href="https://rdm-os-cs-vu.github.io/open-handbook/guidlines.html">Guidelines</a></p>,
    description: "The university, faculty, department guidelines about RDM and Open Science.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-sky-600 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    name: <p className="tw-inline"><a href="https://rdm-os-cs-vu.github.io/open-handbook/group-guidelines">Group Specific Guidelines</a></p>,
    description: "The guidelines for each group in the department",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-sky-600 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    name: <p className="tw-inline"><a href="https://rdm-os-cs-vu.github.io/open-handbook/downloads.html">Downloads</a></p>,
    description: "A one-stop place for all the files and templates related to RDM.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-sky-600 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    name: <p className="tw-inline"><a href="https://rdm-os-cs-vu.github.io/open-handbook/blog.html">Blog</a></p>,
    description: "Updates and news.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="tw-w-6 tw-h-6 tw-stroke-sky-600 tw-mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  
];

function Features() {
  return (
    <>
      <div className="tw-bg-white tw-py-12 sm:tw-py-16">
        <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
          <div className="tw-mx-auto tw-max-w-2xl sm:tw-text-center">
            <h2 className="tw-mt-2 tw-text-3xl tw-font-bold tw-tracking-tight tw-text-sky-900 sm:tw-text-4xl">
              OVERVIEW
            </h2>
            
            {/* <p className="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-600">
              Why use the Research Support Handbook?
            </p>
            */}
          </div>
        </div>
        <div className="tw-mx-auto tw-mt-16 tw-max-w-7xl tw-px-6 sm:tw-mt-20 md:tw-mt-24 lg:tw-px-8">
          <dl className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-6 tw-gap-y-10 tw-text-base tw-leading-7 tw-text-gray-600 sm:tw-grid-cols-2 lg:tw-mx-0 lg:tw-max-w-none lg:tw-grid-cols-3 lg:tw-gap-x-8 lg:tw-gap-y-16">
            {features.map((feature) => {
              const Component = feature.icon;
              return (
                <div key={feature.name} className="tw-flex tw-flex-col">
                  <dt className="tw-inline tw-font-semibold tw-text-gray-900">
                    <Component aria-hidden="true" />
                    {feature.name}
                  </dt>{" "}
                  <dd className="tw-inline">{feature.description}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </>
  );
}
