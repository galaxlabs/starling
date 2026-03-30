import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { erpService } from "../../services/api";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = ({ defaultService = "" }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: defaultService
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await erpService.createLead(data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your enquiry. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center space-y-6 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Enquiry Sent!</h3>
        <p className="text-gray-600">
          Thank you for reaching out to Sterling Edge Ltd. Our team will review your request and get back to you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="text-blue-600 font-semibold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <input
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <input
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
          <input
            {...register("phone")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="07000 000000"
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Service Interested In</label>
          <select
            {...register("service")}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none bg-white"
          >
            <option value="">Select a service</option>
            <option value="cloud-kitchen">Cloud Kitchen / Food Service</option>
            <option value="cleaning">Cleaning Services</option>
            <option value="web-dev">Web Development</option>
            <option value="seo">Local SEO / GBP Optimization</option>
            <option value="substation-design">Substation P&C Design</option>
            <option value="other">Other Enquiry</option>
          </select>
          {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Your Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
          placeholder="Tell us about your requirements..."
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
