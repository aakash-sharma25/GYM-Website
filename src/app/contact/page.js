function page() {
  return (
    <>
      <section className=" bg-black mt-[80px]">
        {/* contact */}
        <div className=" contact grid grid-cols-2 items-center gap-10  p-3">
          <div className=" contact-form flex flex-col items-end ">
            <div className="w-[70%]">
              <h2 className=" text-[36px] font-bold leading-[1.2]">
                We are here for help you! To Shape Your Body.
              </h2>
              <p className="text-[16px]  text-[#646464] font-medium my-[40px]">
                At Gymate, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <div>
                <h1>Mumbai Maharashtra</h1>
                <p>85 Briston Mint Street, Mumbai, E1 8LG, Maharashtra</p>
              </div>
            </div>
          </div>

          <div className="flex items-start w-[70%] h-full py-5">
            <form className=" text-black flex flex-col gap-2 w-full p-2">
              <input
                type="text"
                required
                placeholder="Full Name *"
                className=" p-3 rounded-md"
              />
              <input
                type="email"
                required
                placeholder="Email Address*"
                className=" p-3 rounded-md"
              />
              <select name="Select" className=" p-3 rounded-md">
                <option>Cycling</option>
                <option>Playing</option>
              </select>
              <textarea
                type="text"
                required
                placeholder="Comment"
                cols={5}
                rows={5}
                className=" p-3 rounded-md"
              />
              <button
                type="submit"
                className="bg-red-500 text-white p-3 rounded-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <iframe
          className=" my-5"
          src="https://www.google.com/maps/d/embed?mid=1DfFcv3jAM8NAeioBjW_CHwtKL3A&hl=en_US&ehbc=2E312F"
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "35rem", border: "0px" }}
        ></iframe>
      </section>
    </>
  );
}

export default page;
