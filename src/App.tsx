import bgPattern from '../src/assets/images/bg-pattern-desktop.svg'
import heroDesktop from '../src/assets/images/hero-desktop.jpg'
import heroMobile from '../src/assets/images/hero-mobile.jpg'
import iconArrow from '../src/assets/images/icon-arrow.svg'
import iconError from '../src/assets/images/icon-error.svg'
import logo from '../src/assets/images/logo.svg'

import { useForm } from 'react-hook-form'

const background = { pattern: `${bgPattern}` }

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '' } })

  return (
    <>
      <main className='min-h-screen bg-gradient-to-b from-bgGradientFrom to-bgGradientTo'>
        <div className='mx-auto flex h-screen justify-end'>
          <section
            className={`grid grid-cols-1 text-center md:w-[70rem] md:bg-[url(${background.pattern})] md:text-left lg:w-3/5`}
          >
            <div className='md:m-auto md:grid md:h-4/5 md:w-3/5 lg:w-1/2'>
              <div className='p-7 md:p-0'>
                <img src={logo} alt='brand logo' className='h-6 md:h-10' />
              </div>
              <div className='mb-8 md:hidden'>
                <img
                  src={heroMobile}
                  alt='hero image'
                  className='h-full w-full'
                />
              </div>
              <div className='grid gap-6 p-7 md:gap-0 md:p-0'>
                <h1 className='text-5xl font-bold uppercase leading-[3rem] tracking-[0.4rem] text-darkGrayRed md:text-7xl md:leading-tight'>
                  <span className='font-light text-desaturatedRed'>We're</span>
                  <br /> coming <br />
                  soon
                </h1>
                <p className='text-base text-desaturatedRed md:text-lg'>
                  Hello fellow shoppers! We're currently building our new
                  fashion store. Add your email below to stay up-to-date with
                  announcements and our launch deals.
                </p>
                <form
                  onSubmit={handleSubmit((data) => {
                    console.log(data)
                  })}
                >
                  <div
                    className={`relative flex justify-between rounded-full ${
                      errors.email ? 'border-2 border-softRed' : 'border'
                    } border-solid border-desaturatedRed  bg-transparent`}
                  >
                    <div className='flex w-full items-center justify-between'>
                      <input
                        {...register('email', {
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Please provide a valid email',
                          },
                          required: 'Please provide a valid email',
                        })}
                        type='email'
                        placeholder='Email Address'
                        className='focus w-full rounded-full bg-transparent px-6 py-4 text-left text-sm placeholder:text-desaturatedRed/50 focus:rounded-full focus:outline-none focus:ring focus:ring-desaturatedRed/30 md:text-base'
                        style={{ backgroundColor: 'transparent' }}
                      />
                      {errors.email?.message && (
                        <img
                          src={iconError}
                          alt='error icon'
                          className='relative right-24 h-5 w-5 md:right-28'
                        />
                      )}
                    </div>
                    <button
                      type='submit'
                      className='absolute bottom-[-3px] right-[-4px] flex h-[110%] w-[5.5rem] items-center justify-center rounded-full bg-gradient-to-r from-btnGradientFrom to-btnGradientTo shadow-2xl shadow-desaturatedRed hover:to-[#f8aeb3] md:w-24'
                    >
                      <img
                        src={iconArrow}
                        alt='submit icon'
                        className='text-center'
                      />
                    </button>
                  </div>
                  {errors.email?.message && (
                    <p className='px-6 py-2 text-softRed'>{`${errors.email.message}`}</p>
                  )}
                </form>
              </div>
            </div>
          </section>
          <div className='hidden md:block'>
            <img
              src={heroDesktop}
              alt='hero image'
              className='h-full object-cover'
            />
          </div>
        </div>
      </main>
      <footer className='hidden'>
        <p className='attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Your Name Here</a>.
        </p>
      </footer>
    </>
  )
}

export default App
