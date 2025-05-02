"use client"
import Navigation from "@/components/navigation";
import logo from "../../../public/home/logo red.png";
import Image from "next/image";
import Homebanner from "../../../public/home/kalliop_data.png"; 
import building from "../../../public/home/building.jpeg"; 
import banner from "../../../public/home/better.png";
import Homebannerimage from "../../../public/home/whitebg.jpg";
import map from "../../../public/home/map-background_4.png";
import rcic from "../../../public/home/RCIC-IRB_EN_HORZ_CLR_POS.png";
import logocip from "../../../public/home/capic2-logo.png";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, CalendarDays, Cannabis, Earth, Files, GraduationCap, Home, Milestone, Users } from "lucide-react";
import Footer from "@/components/footer";
import { Card } from "@radix-ui/themes";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardContent, CardHeader } from "@/components/ui/card";
export const  truncateText = (text: string, length = 80) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
};
export default function HomePage() {

  type DrawData = {
    drawName: string;
    drawCRS: number;
    drawSize: number;
    drawDateTime: string;
    drawCutOff: string;
  };

    const [data, setData] = useState<DrawData[] | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json?wbCacheBust=feee3f75-be79-494f-8744-7fe244735836');
            setData(response.data.rounds);
            console.log(response.data)
          } catch (error) {
            console.log(error)
          }
        };
        fetchData();
      }, []);
    

  return (
    <>
   
  <div style={{
          backgroundImage: `url(${Homebannerimage.src})`,
        
        }} className=" bg-cover">
  <div   className="flex items-center justify-center h-screen w-screen">
  <div className=" flex flex-row justify-center items-center">
  <div className="lg:max-w-xl p-4 lg:pr-5 relative z-40">
                    <p className="flex text-sm uppercase text-g1  ">
                         
                      
                    </p>
                    <h2 className="mb-6 mt-[3.5rem] max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                       Creating Your Canadian
                        <span className="my-1 inline-block border-b-8 border-red-600 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">Tales</span>
                    </h2>
                    <p className="text-base text-gray-700">Craft your Canadian journey with expert immigration guidance and personalized care at Kalliope Immigration Inc., where your dreams become our mission.</p>
                    <div className="mt-10 flex flex-col items-center md:flex-row">
                        <a href="https://calendly.com/merilo-thekalliope/30min" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-red-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-gray-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto">
                            Book an Appointment</a>
                        <a href="/contactus" aria-label="" className="group  w-full inline-flex items-center font-semibold text-g1">Contact Us
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="abg-orange-400 hidden lg:block w-[30%] overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                     <Image src={Homebanner} alt={""}/>
                </div>
   
  </div>
</div>




<div  className="flex justify-center  pb-20 mt-[-6rem]">
<div className="flex flex-wrap items-center z-200 justify-center py-5 md:w-3/4 md:pb-20 md:pt-10 md:pl-10">

{data && (
<div
className="relative flex flex-wrap flex-row z-200 lg:justify-start justify-center shadow-[10px_10px_20px_rgba(0,0,0,0.25),-10px_-10px_20px_rgba(255,255,255,0.25)] bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white max-w-[80%]  w-full  p-8">
<div
className="relative  m-0 md:mr-4 md:pr-4 overflow-hidden text-center text-gray-700 bg-transparent md:border-r rounded-none shadow-none bg-clip-border border-white/10">
<p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
{data[0]?.drawName}
</p>
<h1 className="flex justify-center gap-1 mt-4 font-sans antialiased font-normal tracking-normal text-[#BD0C0C] text-7xl">
  {data[0]?.drawCRS}
  <span className="self-end text-4xl"></span>
</h1>
<span className="mt-4 text-gray-400 text-2xl">CRS score</span>
</div>
<div className="p-0 flex items-center  sm:w-[55%] md:w-[55%] lg:w-[55%] mt-8 lg:mt-0 md:mt-0">


<ul className="flex flex-col w-full gap-4">
  <li className="flex items-center gap-4">
    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
      </svg></span>
    <p className="block font-sans text-base flex antialiased font-normal leading-relaxed text-inherit">
    Number of invitations issued : <span className="font-bold ml-2"> {data[0]?.drawSize}</span>
    </p>
  </li>
  <li className="flex items-center gap-4">
    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
      </svg></span>
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
    Date and time of round : <span className="font-bold ml-2"> {data[0]?.drawDateTime}</span>
    </p>
  </li>
  <li className="flex items-center gap-4">
    <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
      </svg></span>
    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
    Tie-breaking rule :<span className="font-bold ml-2"> {data[0]?.drawCutOff}</span>
    </p>
  </li>
 
  
</ul>
</div>

</div> 
)}
</div>
</div>

</div>


   
{/* ------------------about us------------------- */}



<div  style={{
          backgroundImage: `url(${banner.src})`
          
        }} className="bg-cover">
      <div  
        className="relative flex  pt-20 pb-24 lg:pt-[120px] lg:pb-[210px]  flex-col  items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div className="w-full  px-4 lg:w-6/12 ">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i0.wp.com/askmigration.com/wp-content/uploads/2019/02/belonging-1.jpg?w=940&ssl=1"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.dieferienwelt.de/wp-content/uploads/2021/01/Kanada.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/wgZTQ3S/building.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 pb-28 px-4 md:ml-8 lg:w-1/2 xl:w-6/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-[#BD0C0C]  text-lg font-semibold ">
                  Why Choose Us 
                </span>
                <h2 className="mb-5 text-3xl font-bold text-white dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-[#878787] dark:text-dark-6">
                At <strong>Kalliope Immigration Inc</strong>,we simplify the Canadian immigration process with personalized, top-notch services. Here is why you can trust us with your journey:
                </p>
                <ul className="list-none mt-4">
  <li className="list-none mt-4">
 <div className="flex items-center flex-row gap-2.5 mb-2">
  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <h3 className="font-black text-lg text-[#F4F4F4]">RCIC-IRB Expertise</h3>
  </div>
  <p className="text-base  text-[#878787] ml-4" >Led by a <strong>Regulated Canadian Immigration Consultant (RCIC-IRB) </strong>, we provide expert guidance on Canadian immigration law.</p>

  </li>

  <li className="list-none mt-4">
 <div className="flex items-center flex-row gap-2.5 mb-2">
  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <h3 className="font-black text-lg text-[#F4F4F4]">Personalized Service</h3>
  </div>
  <p className="text-base  ml-4 text-[#878787]" >At Kalliope Immigration Inc., we tailor solutions to fit your unique immigration needs.</p>

  </li>
  <li className="list-none mt-4">
 <div className="flex items-center flex-row gap-2.5 mb-2">
  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <h3 className="font-black text-lg text-[#F4F4F4]">Comprehensive Immigration Support</h3>
  </div>
  <p className="text-base  text-[#878787] ml-4" >From permanent residence to temporary visas and work permits, we handle complex cases at every stage.</p>

  </li>
  <li className="list-none mt-4">
 <div className="flex items-center flex-row gap-2.5 mb-2">
  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <h3 className="font-black text-lg text-[#F4F4F4]">Client-Centered Approach</h3>
  </div>
  <p className="text-base  ml-4 text-[#878787]" >We prioritize your success with transparent communication and personalized service.</p>

  </li>
  <li className="list-none mt-4">
 <div className="flex items-center flex-row gap-2.5 mb-2">
  <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
  <h3 className="font-black text-lg text-[#F4F4F4]">Integrity &amp; Transparency</h3>
  </div>
  <p className="text-base  ml-4 text-[#878787]" >Honest, clear guidance every step of the way—ensuring you understand the process, timelines, and fees.</p>

  </li>


</ul>
                
           
              
              </div>
              
            </div>
          
</div>

</div>


{/* -----------services----------- */}


<section className="pt-20 pb-12 lg:pt-[120px] bg-[#F4F4F4] lg:pb-[90px] dark:bg-dark">
   <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
         <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
               <span className="text-primary mb-2 block text-[#BD0C0C] text-lg font-semibold">
               Our Services
               </span>
               <h2
                  className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                  >
                  What We Offer
               </h2>
               <p className="text-body-color text-base dark:text-dark-6">
               Explore our services below to learn how we can assist you on your journey to Canada.
               </p>
            </div>
         </div>
         <div className="flex flex-wrap justify-center  gap-4">
            <a href="/services/immigration" className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Milestone color="#BD0C0C"  className="ml-2" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none">
              Immigration Pathway
            </p>
            <p className="text-sm text-base text-muted-foreground">
            {truncateText( "There are several immigration pathways to migrate to Canada by attaining Permanent Residency. From Federal Express Entry pathways to Provincial Nominee Programmes the options are many.")} 
            </p>
          </div>
          
        </a>
      
        <a  href="/services/study_permit"className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <GraduationCap color="#BD0C0C" className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Study Permits
            </p>
            <p className="text-sm text-base text-muted-foreground">
             {truncateText("To study in Canada for any program longer than 6 months, study permits are mandatory . The application process varies depending on your country of residence.")}
            </p>
          </div>
          
        </a>
        <a href="/services/cadian_citizenship" className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Cannabis color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Canadian Citizenship 
            </p>
            <p className="text-sm text-base text-muted-foreground">
           {truncateText(" We offer support to apply for your Canadian Citizenship.")}
            </p>
          </div>
          
        </a>
        <a href="/services/work_permit" className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <BriefcaseBusiness color="#BD0C0C"  className="ml-6 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Work Permits
            </p>
            <p className=" text-base text-muted-foreground">
            {truncateText("There are several kinds of work permits to work in Canada, from Post graduate work permit to Spousal open work permits, from LMIA based work permits to Bridge Open Work Permits.")}
            </p>
          </div>
          
        </a>
       
        <a href="/services/temporary_residence" className=" flex w-[20rem] h-[10rem] rounded-2xl hover:shadow-lg hover:bg-white hover:shadow-blue-gray-500/20 items-center hover-transition space-x-4  p-4">
          <Earth color="#BD0C0C"  className="ml-2 text-red" />
          <div className="flex-1 space-y-1">
            <p className="text-lg font-medium leading-none ">
              Temporary Resident Visas
            </p>
            <p className="text-sm text-base text-muted-foreground">
             {truncateText("Temporary resident Visas are required to enter Canada depending on your nationality whether to work or study in Canada . Additionally you might need Visitor Visa, Super Visa etc to visit Canada.")}
            </p>
          </div>
          
        </a>
 
</div>
      </div>
     
   </div>
</section>
<section>
  <div  className="flex justify-center mt-[-8rem] bg-[#F4F4F4]">
<img src="https://goto.etherscan.com/images/about/world-link.svg" />
  </div>
</section>


      {/* ----------footer---------- */}
     
      
    </>
  );
}
