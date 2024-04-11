import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ContactMessage } from '@/types/contact.type';

const schema = z.object({
  email: z.string().min(1, 'Please insert your email address').email('Please enter a valid email'),
  name: z.string().min(1, 'Please insert your name'),
  message: z.string().min(1, 'Please insert the message'),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMessage>({
    resolver: zodResolver(schema),
  });

  function submitContactForm(data: any) {
    console.log({ data });
  }

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
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
            <input {...register('email')} type="text" className="grow" placeholder="Your email" />
          </label>
          {errors.email && <span className='block mt-1 text-red-500'>{errors.email.message}</span>}
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
            <input {...register('name')} type="text" className="grow" placeholder="Your name" />
          </label>
          {errors.name && <span className='block mt-1 text-red-500'>{errors.name.message}</span>}
        </div>
      </div>

      <div className="w-full mb-10">
        <textarea
          {...register('message')}
          className="textarea textarea-bordered w-full"
          placeholder="Your message"
          rows={6}></textarea>
        {errors.message && <span className='block mt-1 text-red-500'>{errors.message.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
