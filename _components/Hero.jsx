function Hero() {
  return (
    <>
      <div className="tw-mx-auto tw-max-w-2xl tw-py-16">
        <div className="tw-hidden sm:tw-mb-8 sm:tw-flex sm:tw-justify-center">
          <div className="tw-relative tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-leading-6 tw-text-gray-600 tw-ring-1 tw-ring-gray-900/10 hover:tw-ring-gray-900/20">
            This is a new project. Missing something?{" "}
            <a href="https://ez-github-contributor.netlify.app/" className="tw-font-semibold tw-text-sky-600">
              <span className="tw-absolute tw-inset-0" aria-tw-hidden="true" />
              Let us know <span aria-tw-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="tw-text-center">
          <h2 className="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-6xl">
            {/* Find quality information on research practices at VU Amsterdam */}
            The VU-CS handbook on RDM & Open Science. 
          </h2>
          <p className="tw-mt-6 tw-text-base tw-leading-8 tw-text-gray-600">
            <strong>This handbook guides researchers and PhD students in the Computer Science department of the VU through issues related to research data management and open science.</strong>
          </p>
          {/* <div className="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6">
            <a
              href="./topics.html"
              className="tw-rounded-md tw-bg-sky-600 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-sky-500 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-sky-600"
            >
              View topics
            </a>
            <a
              href="./guides.html"
              className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900"
            >
              View guides
            </a>
          </div>
          */}
          <p className="tw-mt-6 tw-text-base tw-leading-8 tw-text-gray-600" text-align="left">  
          This handbook serves as an extension of the University Library's <a href="https://rdm.vu.nl/">Handbook</a> and we try to stay consistent with their guidelines and suggestions. 
          This handbook provides researchers (including PhD students) in the CS department with more detailed guidance and examples that can be considered complementary material for the existing <a href="https://libguides.vu.nl/rdm/dmp">LibGuides</a>.
          Existing resources such as the <a href="https://vu.nl/en/employee/research-data-support">Research Data Support</a> will be referenced. 
          Given that there are many documents and guidelines, this handbook aims to provide a uniformed entry point for CS researchers to find them easily. 
          </p>
          
          <p>This handbook is brought to you by Shuai Wang and Kees Verstoep with the help of colleagues from the university library. </p>
        </div>
      </div>
    </>
  );
}
