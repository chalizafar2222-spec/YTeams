import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ClientLogos from '../ClientLogos/ClientLogos'
import FeaturedIn from "../FeaturedIn/FeaturedIn"
import IndustriesSection from '../Industries/Industries'
import ServicesSection from '../ServicesSection/ServicesSection'
import VideoTextSection from '../VideoTextSection/VideoTextSection'
import FeaturedInsights from '../FeaturedInsights/FeaturedInsights'
import GetStartedSection from '../GetStartedSection/GetStartedSection'
import AchievementsSection from '../AchievementsSection/AchievementsSection'
import TestimonialsSection from '../TestimonialSection/TestimonialSection'

function Connection() {
  return (
    <div>
      <HeroSection/>
      <ClientLogos/>
      <FeaturedIn/>
      <ServicesSection/>
      <IndustriesSection/>
      <VideoTextSection/>
      <FeaturedInsights/>
      <TestimonialsSection/>
      <GetStartedSection/>
      <AchievementsSection/>
    </div>
  )
}

export default Connection
