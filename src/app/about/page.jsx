import ProductGrid from '@/components/about/browse'
import Sales from '@/components/about/countup'
import Footerabout from '@/components/about/footerabout'
import Gap from '@/components/about/gap'
import HeroSection from '@/components/about/hero'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection />
      <Gap />
      <Sales />
      <ProductGrid />
      <Footerabout />
    </div>
  )
}
