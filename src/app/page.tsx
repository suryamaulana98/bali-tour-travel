import Hero from '@/components/home/Hero';
import FeaturedTours from '@/components/home/FeaturedTours';
import PopularDestinations from '@/components/home/PopularDestinations';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowBookingWorks from '@/components/home/HowBookingWorks';
import CTAWhatsApp from '@/components/home/CTAWhatsApp';
import { getPackagesData } from '@/data/packages';

export const revalidate = 3600; // Revalidate every hour

export default async function HomePage() {
  const packages = await getPackagesData();

  return (
    <>
      <Hero />
      <FeaturedTours packages={packages} />
      <PopularDestinations />
      <WhyChooseUs />
      <HowBookingWorks />
      <CTAWhatsApp />
    </>
  );
}
