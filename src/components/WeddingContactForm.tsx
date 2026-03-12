import { useState, useEffect } from "react";
import { type ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-react";
import { useUniformSignals } from "@/hooks/useUniformSignals";

type WeddingContactFormProps = ComponentProps<{
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  submitButtonText?: string;
}>;

export default function WeddingContactForm({ component }: WeddingContactFormProps) {
  const { setInterest } = useUniformSignals();
  const email = component.parameters?.email?.value as string | undefined;
  const phone = component.parameters?.phone?.value as string | undefined;
  const submitButtonText = component.parameters?.submitButtonText?.value as string | undefined;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fianceName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setInterest("wedding");
  }, [setInterest]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInterest("wedding");
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-light uppercase tracking-[0.3em] text-gray-800 md:text-3xl">
          <UniformText parameterId="title" placeholder="Request For More Information" />
        </h2>

        <div className="mt-6 text-center text-gray-600">
          <UniformRichText 
            parameterId="description" 
            placeholder="Fill out the form below and a member of our Weddings Team will be in contact to give you more information about weddings at Turning Stone." 
          />
        </div>

        <p className="mt-4 text-center text-gray-600">
          You may also email{" "}
          {email ? (
            <a href={`mailto:${email}`} className="text-[#8B7355] hover:underline">
              {email}
            </a>
          ) : (
            <span className="text-[#8B7355]">weddings@turningstone.com</span>
          )}{" "}
          or call{" "}
          {phone ? (
            <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="text-[#8B7355] hover:underline">
              {phone}
            </a>
          ) : (
            <span className="text-[#8B7355]">888.361.7958</span>
          )}{" "}
          and let's talk about your wedding!
        </p>

        <p className="mt-4 text-center text-sm text-gray-500">
          All fields required unless noted as optional.
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <h3 className="font-serif text-2xl italic text-gray-700">Contact</h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-400 focus:border-[#8B7355] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-400 focus:border-[#8B7355] focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="fianceName" className="block text-sm font-semibold text-gray-700">
              Fiancé(e)'s Full Name
            </label>
            <input
              type="text"
              id="fianceName"
              name="fianceName"
              value={formData.fianceName}
              onChange={handleChange}
              placeholder="Fiancé(e)'s Full Name"
              className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-400 focus:border-[#8B7355] focus:outline-none"
              required
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-400 focus:border-[#8B7355] focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mt-1 w-full border-b border-gray-300 bg-transparent py-2 text-gray-700 placeholder-gray-400 focus:border-[#8B7355] focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              type="submit"
              className="inline-block border-2 border-[#8B7355] bg-[#8B7355] px-10 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-transparent hover:text-[#8B7355]"
            >
              {submitButtonText || "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
