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
            className="mx-auto max-w-lg rounded-xl bg-white p-6 drop-shadow-md hover:scale-105 transition-all duration-700"
            key={index}
          >
            <p>”</p>
            <p>{item.text}</p>
            <div>
              <img src={item.image} alt="testimonial avatar image" />
              <div>
                <p>{item.author}</p>
                <p>{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
