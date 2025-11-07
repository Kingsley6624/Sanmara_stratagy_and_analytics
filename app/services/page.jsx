import {getServicesData} from '@/lib/getservicesData'
import IndustriesWeServe from '@/components/IndustriesWeServe';
import WhyChoseUs from '@/components/WhyChoseUs';

export default async function OurServices() {
  const services = await getServicesData();



  return (
    <div className="bg-gray-50 text-gray-800">
      
      <section className=" mt-[3.1rem] relative bg-linear-to-br from-slate-900 via-blue-900 to-indigo-800 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Data Into Strategic Growth
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Empowering businesses to make smarter decisions through data,
            strategy, and innovation.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#services"
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you’re an emerging startup or an established enterprise,
          Sanmara delivers clarity where it matters most — at the intersection
          of data, strategy, and success.
        </p>
        <p className="mt-6 text-gray-700 italic">
          “To deliver strategies grounded in insight, analytics built on
          precision, and decisions backed by evidence.”
        </p>
      </section>

     
      <section id="services" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.body}</p>
                <ul className="space-y-2 text-gray-600">
                  {service.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-700 mt-1">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <WhyChoseUs />
     
      <section className="py-24 bg-linear-to-r from-indigo-900 to-blue-700 text-white text-center px-6">
        <h3 className="text-3xl font-semibold mb-6">
          Let’s Build Something Intelligent Together
        </h3>
        <a
          href="/contact"
          className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
