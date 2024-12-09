import About from "@/components/About";
import Acknowledgments from "@/components/Acknowledgements";
import Contacts from "@/components/Contacts";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Nav from "@/components/Nav";
import Progress from "@/components/Progress";
import PurposeSection from "@/components/Purpose";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <PurposeSection />
      <Vision />
      <Mission />
      <Services />
      <About />
      <Progress />
      <Equipment />
      <Team />
      <Acknowledgments />
      <Contacts />
      <Footer />
    </div>
  );
}
