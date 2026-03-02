import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div data-aos="fade-up" className="flex flex-col items-center text-center mb-16">
                <h1 className="text-5xl font-medium mb-4">Get In <span className="text-sky-400">Touch</span></h1>
                <p className="text-gray-600 text-xl max-w-3xl">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
            </div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div data-aos="fade-left">
                    <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Whether you have a project in mind, want to collaborate, or just
                        want to say hello, I'd love to hear from you. Feel free to reach
                        out through any of the channels below.
                    </p>

                    {/* Email Card */}
                    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border mb-6 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-500 rounded-lg">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <p className="text-gray-500 text-sm">imnransirazee2001@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border mb-6 hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-500 rounded-lg">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <p className="text-gray-500 text-sm">01751083562</p>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                        <div className="w-12 h-12 flex items-center justify-center bg-sky-100 text-sky-500 rounded-lg">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <p className="text-gray-500 text-sm">BANGLADESH</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <div data-aos="fade-right" className="bg-white rounded-2xl p-8 w-full max-w-xl">
                    <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

                    <form className="space-y-6">

                        {/* Name + Email Row */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 
                         focus:outline-none focus:border-sky-400 transition"
                                />
                                <label
                                    className="absolute left-4 top-2 text-gray-500 text-sm bg-white px-1 
                         transition-all duration-200
                         peer-placeholder-shown:top-3.5
                         peer-placeholder-shown:text-base
                         peer-placeholder-shown:text-gray-400
                         peer-focus:top-2
                         peer-focus:text-sm
                         peer-focus:text-sky-500"
                                >
                                    Name
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder=" "
                                    className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 
                         focus:outline-none focus:border-sky-400 transition"
                                />
                                <label
                                    className="absolute left-4 top-2 text-gray-500 text-sm bg-white px-1 
                         transition-all duration-200
                         peer-placeholder-shown:top-3.5
                         peer-placeholder-shown:text-base
                         peer-placeholder-shown:text-gray-400
                         peer-focus:top-2
                         peer-focus:text-sm
                         peer-focus:text-sky-500"
                                >
                                    Email
                                </label>
                            </div>

                        </div>

                        {/* Subject */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder=" "
                                className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 
                       focus:outline-none focus:border-sky-400 transition"
                            />
                            <label
                                className="absolute left-4 top-2 text-gray-500 text-sm bg-white px-1 
                       transition-all duration-200
                       peer-placeholder-shown:top-3.5
                       peer-placeholder-shown:text-base
                       peer-placeholder-shown:text-gray-400
                       peer-focus:top-2
                       peer-focus:text-sm
                       peer-focus:text-sky-500"
                            >
                                Subject
                            </label>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                rows="5"
                                placeholder=" "
                                className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 
                       focus:outline-none focus:border-sky-400 transition resize-none"
                            />
                            <label
                                className="absolute left-4 top-2 text-gray-500 text-sm bg-white px-1 
                       transition-all duration-200
                       peer-placeholder-shown:top-4
                       peer-placeholder-shown:text-base
                       peer-placeholder-shown:text-gray-400
                       peer-focus:top-2
                       peer-focus:text-sm
                       peer-focus:text-sky-500"
                            >
                                Message
                            </label>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-sky-400 text-white py-3 rounded-lg 
                     hover:bg-sky-500 transition duration-300 font-medium"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}