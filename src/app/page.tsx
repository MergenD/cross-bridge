import Main from '@/components/parts/main/Main';
import AboutUs from '@/components/parts/aboutUs/AboutUs';
import Identity from '../components/parts/identity/Identity';
import Purpose from '../components/parts/purpose/Purpose';
import Vision from '../components/parts/vision/Vision';
import Mission from '../components/parts/mission/Mission';
import Industries from '../components/parts/industries/Industries';
import Technology from '../components/parts/technology/Technology';
import Shaping from '../components/parts/shaping/Shaping';
import Sustainability from '../components/parts/sustainability/Sustainability';
import Careers from '../components/parts/careers/Careers';
import Contact from '../components/parts/contact/Contact';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (
    <div>
      <Main />
      <AboutUs />
      <Identity />
      <Purpose />
      <Vision />
      <Mission />
      <Industries />
      <Technology />
      <Shaping />
      <Sustainability />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
