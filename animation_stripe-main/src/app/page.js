
import BmwSliderSection from '@/components/home/bmwsidersection'
import BuiltForGrowth from '@/components/home/builtforgrowth'
import HeroWithCode from '@/components/home/designedfordevloper'
import GlowingEarth from '@/components/home/earthanimation'
import EnterpriseTextBlock from '@/components/home/enterpriserenovation'
import Footer from '@/components/home/footer'
import Hero from '@/components/home/hero'
import Gallery from '@/components/home/logo'
import StickyLayout from '@/components/home/modularsolution'

import StripeInfoCards from '@/components/home/stripinfo'
import React from 'react'


export default function page() {
  return (
    <div>

      <Hero />
      <Gallery />
      <StickyLayout />
      <GlowingEarth />
      <EnterpriseTextBlock />
      <BmwSliderSection />
      <HeroWithCode />
      <StripeInfoCards />
      <BuiltForGrowth/>
      <Footer />
    </div>
  )
}
