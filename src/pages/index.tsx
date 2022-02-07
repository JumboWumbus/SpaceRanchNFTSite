import { useRouter } from 'next/router';


import NavBar from '@/templates/NavBar';
import HeroComp from '@/templates/HeroComp';
import MainPageContent from '@/templates/MainPageContent';
import Footer from '@/templates/FooterComp';

export default function Index(){
  const router = useRouter();

  return (

    <>
    
    <NavBar/>
    <HeroComp/>
    <MainPageContent/>
    <Footer/>
    </>
    
  );
};


