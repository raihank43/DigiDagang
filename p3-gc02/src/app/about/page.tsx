"use client";

export default function About() {
  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                     
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    <h1 className="ml-8 font-bold">
                      <span className=" italic font-poppins-black text-indigo-500">
                        Digi{" "}
                      </span>
                      <span className=" font-extrabold text-2xl font-poppins-bold text-orange-600">
                        Dagang
                      </span>
                    </h1>
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Indonesia
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Best Indonesian E-Commerce
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Selamat datang di DigiDagang Ltd., platform e-commerce
                        terbaik di Indonesia. Kami berdedikasi untuk memberikan
                        pengalaman belanja online yang tak tertandingi, dengan
                        menawarkan berbagai produk berkualitas tinggi dari
                        berbagai kategori, termasuk elektronik, perabotan, dan
                        aksesori fashion. DigiDagang Ltd. bukan hanya tentang
                        penjualan produk. Kami juga menawarkan layanan branding,
                        desain, pemasaran, dan iklan untuk membantu bisnis Anda
                        tumbuh dan berkembang. Kami berkomitmen untuk menjaga
                        privasi dan keamanan pelanggan kami, dengan kebijakan
                        privasi dan cookie yang jelas dan transparan.
                        Bergabunglah dengan kami dalam perjalanan ini, dan
                        temukan kenapa DigiDagang Ltd. adalah ‘E-Commerce
                        Terbaik di Indonesia
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
