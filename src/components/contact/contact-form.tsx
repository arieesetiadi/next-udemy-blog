import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContactMessage } from '@/types/contact.type';
import { useMutation } from '@tanstack/react-query';
import * as contactApi from '@/lib/api/contact.api';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const contactMutation = useMutation({
    mutationKey: ['store-contact-message'],
    mutationFn: async (contactMessage: ContactMessage) => {
      return await contactApi.storeContactMessage(contactMessage);
    },
    onSuccess: () => {
      contactForm.reset();
      toast.success('Your message has been sent successfully');
    },
  });

  const contactForm = useForm<ContactMessage>({
    resolver: zodResolver(
      z.object({
        email: z.string().min(1, 'Please insert your email address').email('Please enter a valid email'),
        name: z.string().min(1, 'Please insert your name'),
        message: z.string().min(1, 'Please insert the message'),
      }),
    ),
  });

  function submitContactForm(contactMessage: any) {
    contactMutation.mutate(contactMessage);
  }

  return (
    <form onSubmit={contactForm.handleSubmit(submitContactForm)}>
      <div className="mb-10 flex gap-10">
        {/* Email */}
        <div className="w-full">
          <label className="input input-bordered flex w-full items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input {...contactForm.register('email')} type="text" className="grow" placeholder="Your email" />
          </label>
          {contactForm.formState.errors.email && (
            <span className="mt-1 block text-red-500">{contactForm.formState.errors.email.message}</span>
          )}
        </div>

        {/* Name */}
        <div className="w-full">
          <label className="input input-bordered flex w-full items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input {...contactForm.register('name')} type="text" className="grow" placeholder="Your name" />
          </label>
          {contactForm.formState.errors.name && (
            <span className="mt-1 block text-red-500">{contactForm.formState.errors.name.message}</span>
          )}
        </div>
      </div>

      <div className="mb-10 w-full">
        <textarea
          {...contactForm.register('message')}
          className="textarea textarea-bordered w-full"
          placeholder="Your message"
          rows={6}></textarea>
        {contactForm.formState.errors.message && (
          <span className="mt-1 block text-red-500">{contactForm.formState.errors.message.message}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={contactMutation.isPending}>
        {contactMutation.isPending && <span className="loading loading-spinner loading-xs"></span>}
        Send Message
      </button>
    </form>
  );
}
