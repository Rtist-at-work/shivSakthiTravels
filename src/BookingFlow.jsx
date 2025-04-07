import { PhoneCall, FileText, Car, Smile } from "lucide-react";

const BookingFlow = () => {
  const steps = [
    {
      icon: <PhoneCall size={40} className="text-blue-600" />,
      title: "Step 1",
      desc: "Initiate a Booking via Call",
    },
    {
      icon: <FileText size={40} className="text-green-600" />,
      title: "Step 2",
      desc: "Provide Your Travel & Vehicle Requirements",
    },
    {
      icon: <Car size={40} className="text-yellow-600" />,
      title: "Step 3",
      desc: "We Assign the Perfect Vehicle",
    },
    {
      icon: <Smile size={40} className="text-purple-600" />,
      title: "Step 4",
      desc: "Experience a Seamless Travel Journey",
    },
  ];

  return (
    <section id="booking" className="py-14 bg-white text-center ">
      {/* Title + Contact Row */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-8 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Easy Booking</h2>
        <p className="text-blue-700 text-lg font-medium animate-bounce duration-1000 delay-300">
          📞 Call us now: <span className="font-semibold">+91 98765 43210</span>
        </p>
      </div>

      {/* Booking Steps */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-60 p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingFlow;
