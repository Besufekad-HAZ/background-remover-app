import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div>
      {/* Title */}
      <h2 className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text py-5 pb-2 text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-4xl">
        Customer Testimonials
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-2">
        {/* Testimonial */}
        {testimonialsData.map((item, index) => (
          <div
            className="mx-auto max-w-lg rounded-xl bg-white p-6 drop-shadow-md transition-all duration-700 hover:scale-105"
            key={index}
          >
            <p className="text-4xl text-gray-500">”</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <div className="mt-5 flex items-center gap-3">
              <img
                className="w-[3rem] rounded-full lg:w-[4rem]"
                src={item.image}
                alt="testimonial avatar image"
              />
              <div>
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
