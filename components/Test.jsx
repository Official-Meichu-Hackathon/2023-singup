import React from "react";

function Test() {
  return (
    <>
      <div class="flex items-center justify-center mt-12">
        <a
          class="relative block w-1/4 h-64
                      bg-gray-900 group"
          href="##"
        >
          <div
            class="absolute bg-green-500 inset-0
                            w-full h-64 group-hover:opacity-50"
          ></div>
          <div class="relative p-10">
            <div class="mt-2">
              {/* Hidden content */}
              <div
                class="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
              >
                <div class="p-2">
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
                    alt="logo"
                    width={100}
                    className="rounded-full"
                  />
                  <p class="text-xl text-white">Welcome to GeeksforGeeks.</p>
                  <button
                    class="px-4 py-2 text-sm
                                            text-white bg-green-600"
                  >
                    Learn more
                  </button>
                </div>
              </div>
              {/* End of hidden content */}
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Test;
