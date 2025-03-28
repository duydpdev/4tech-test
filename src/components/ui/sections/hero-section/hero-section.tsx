import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import { CountdownTimer, TextField } from '@/components'
import { PATH_IMAGE } from '@/constants'

export default async function HeroSection() {
  const t = await getTranslations('hero-section')
  return (
    <div className='relative h-screen'>
      {/* Background */}
      <div
        style={{ backgroundImage: `url(${PATH_IMAGE.HERO_SECTION_BG})` }}
        className='clip-hero h-[72%] bg-cover bg-[left_calc(53%)_top_calc(100%)] bg-no-repeat md:h-[75%] lg:h-screen lg:bg-[left_calc(55%)_top_calc(100%)] xl:bg-[left_calc(70%)_top_calc(100%)]'
      />
      {/* Overlay */}
      <div className='pointer-events-none absolute inset-0 z-10 hidden xl:flex'>
        <div className='h-full w-full bg-[radial-gradient(ellipse_50%_30%_at_40%_60%,_#210544_0%,_rgba(23,_5,_68,_0.71)_50%,_rgba(23,_5,_68,_0)_90%)] backdrop-blur-[0.0625rem]' />
      </div>
      {/* Section */}
      <section className='absolute inset-x-0 top-[12%] z-20 mx-auto flex flex-col items-center justify-center px-5 text-center sm:px-20 md:top-[12%] lg:top-[17%] xl:inset-0'>
        <div className='flex flex-col items-center justify-center'>
          {/* Title */}
          <h1 className='mt-5 mb-10 flex scale-100 text-center text-[2.5rem] leading-[3.125rem] font-black tracking-[0.0375rem] text-white md:text-[3.75rem] lg:mt-0 lg:mb-5 lg:scale-75 lg:text-[5rem] lg:leading-[7.5rem]'>
            {t('title-line1')}
            <br className='lg:hidden' />
            <span className='hidden text-base leading-0 tracking-normal lg:inline'>
              &emsp;
            </span>
            {t('title-line2')}
          </h1>

          {/* Countdown panel */}
          <CountdownTimer />
          <div className='mt-10 flex max-w-full flex-col gap-4 text-xs sm:mt-[6.0625rem] sm:max-w-[35rem] sm:text-lg lg:gap-8'>
            {/* Desc */}
            <p className='text-xs leading-[0.9375rem] tracking-[0.05625rem] break-words sm:text-lg lg:leading-[126%] lg:tracking-normal'>
              {t('desc')}
            </p>
            {/* Input */}
            <TextField placeholder={'Label'} />
          </div>
        </div>
      </section>

      {/* Ông tiên */}
      <Image
        className='absolute bottom-[-6%] left-[11%] z-10 scale-[77%] pb-3 md:scale-[40%] lg:bottom-[-17%] lg:left-[-12%] lg:scale-75 lg:pb-8 xl:bottom-[-6%] xl:left-0 xl:scale-100'
        alt='Ông tiên'
        src={PATH_IMAGE.ONG_TIEN}
        width={938}
        height={938}
        priority
        style={{ width: 'auto', height: 'auto' }}
        title='Ông tiên'
      />
    </div>
  )
}
