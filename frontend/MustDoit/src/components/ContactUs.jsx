import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function ContactUS() {
  return (
    <div className="relative isolate overflow-hidden dark:bg-grid-white/[0.10] bg-grid-black/[0.07] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-2xl sm:text-5xl font-bold max-w-sm sm:ml-3 sm:mr-3">Contact Us</h2>
                <p className="mt-4 text-lg text-gray-400">
                We'd love to hear your feedback!
                </p>

            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              
              <input
                id="email-address"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                maxLength={60}
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              
            </div>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            
            </div>
            <div className="mt-6 flex max-w-md gap-x-4">
                    <label htmlFor="comment" className="sr-only">
                        Your comment
                    </label>
                    
                    <textarea
                        id="comment"
                        name="comment"
                        required
                        placeholder="Enter your comment"
                        className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        rows="3"
                    />
                    
                    <button
                        type="submit"
                        className="flex-none rounded-md  bg-[#d946ef] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#9a32aa] "
                    >
                        Send it
                    </button>
            </div>

          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
            </div>
            <dt className="mt-4 text-base font-semibold text-white">24/7 Services</dt>
            <dd className="mt-2 text-base/7 text-gray-400">
                We typically respond within 2 to 3 business days.
            </dd>
            </div>
            <div className="flex flex-col items-start">
            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
            </div>
            <dt className="mt-4 text-base font-semibold text-white">No Spam</dt>
            <dd className="mt-2 text-base/7 text-gray-400">
                Please refrain from spamming. We appreciate your patience.
            </dd>
            </div>
          </dl>
        </div>
      </div>
    
    </div>
  )
}
