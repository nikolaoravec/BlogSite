function Footer() {
  return (
    <div class="bg-linear-pink-invert py-12 px-4 bg-gray-300">
      <div
        tabindex="0"
        aria-label="footer"
        class="focus:outline-none mx-auto container flex flex-col items-center justify-center"
      >
        <img className="h-12 w-12 " src="/logo.svg" alt="Workflow" />
        <div class="text-black flex flex-col md:items-center f-f-l pt-3">
          <h1 tabindex="0" class="focus:outline-none text-2xl font-black">
            Write. Read. Connect.
          </h1>
          <div class="my-6 text-base text-color f-f-l">
            <ul class="md:flex items-center">
              <li class="md:mr-6 cursor-pointer pt-4 lg:py-0">
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline hover:text-gray-500"
                >
                  About{" "}
                </a>
              </li>
              <li class="md:mr-6 cursor-pointer pt-4 lg:py-0">
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline hover:text-gray-500"
                >
                  Features{" "}
                </a>
              </li>

              <li class="md:mr-6 cursor-pointer pt-4 lg:py-0">
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline hover:text-gray-500"
                >
                  Careers{" "}
                </a>
              </li>
              <li class="md:mr-6 cursor-pointer pt-4 lg:py-0">
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline hover:text-gray-500"
                >
                  Help{" "}
                </a>
              </li>
              <li class="cursor-pointer pt-4 lg:py-0">
                <a
                  href="javascript:void(0)"
                  class="focus:outline-none focus:underline hover:text-gray-500"
                >
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>
          <div class="text-sm text-color mb-10 f-f-l">
            <p tabindex="0" class="focus:outline-none">
              © 2020 BlogSite. All rights reserved
            </p>
          </div>
        </div>
        <div class="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
        <div class="flex justify-between items-center pt-12"></div>
      </div>
    </div>
  );
}

export default Footer;
