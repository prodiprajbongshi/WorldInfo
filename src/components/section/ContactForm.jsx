export const ContactForm = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="bg-black py-22">
      <h2 className="text-center text-5xl text-white font-semibold">
        Contact Us
      </h2>

      <div className="  container mx-auto px-4">
        <form
          className="flex flex-col max-w-xl mx-auto space-y-6 mt-10"
          action={handleFormSubmit}
        >
          <input
            className="border p-2 border-gray-500 rounded-sm text-white capitalize"
            type="text"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            className="border p-2 border-gray-500 rounded-sm text-white capitalize"
            type="email"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="border p-2 border-gray-500 rounded-sm text-white capitalize"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button
            className="bg-white/80 py-1.5 rounded-sm text-xl cursor-pointer font-bold text-black/70 hover:bg-white/90 transition-colors duration-200"
            type="submit"
            value="Send"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
