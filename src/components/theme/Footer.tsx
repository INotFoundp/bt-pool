import Logo from "@/components/theme/Logo";
import {FaFacebook, FaTelegramPlane} from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className='flex flex-row bg-[#282936] py-12 px-8 ms:px-0'>
      <div className="container flex flex-col md:flex-row mx-auto gap-2">
        <div className={'w-full md:w-5/12 flex flex-col'}>
          <Logo />
          <p className='text-white/80 mt-2 '>
            Via Blockchain, Making the World a Better Place
          </p>
          <div className="flex flex-row justify-start items-center gap-6 mt-5">
            <BsTwitterX size={21} color='#fff'/>
            <FaFacebook size={21} color='#fff' />
            <FaTelegramPlane size={21} color='#fff' />
          </div>
          <p className={'leading-[60px] text-white/60'}>Copyright © 2016 - 2025 ViaBTC</p>
        </div>
        <div className={'hidden w-full md:w-7/12 flex-col gap-6 md:grid md:grid-cols-4 text-white/60'}>
          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>Product</h4>
            <ul>
              <li>
                <a href="#">BTPool Capital</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>About</h4>
            <ul className={'flex flex-col gap-2'}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">BI Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>Services</h4>
            <ul className={'flex flex-col gap-2'}>
              <li><a href="#">Fees</a></li>
              <li><a href="#">Referral Rewards</a></li>
              <li><a href="#">BTPool Ambassador</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>Support</h4>
            <ul className={'flex flex-col gap-2'}>
              <li><a href="#">Announcement Center</a></li>
              <li><a href="#">Ticket</a></li>
              <li><a href="#">Official Verification</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full md:hidden text-white">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>Product</h4></AccordionTrigger>
              <AccordionContent>
                <ul>
                <li>
                    <a href="#">BTPool Capital</a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>About</h4></AccordionTrigger>
              <AccordionContent>
                <ul className={'flex flex-col gap-2'}>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">BI Download</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>Services</h4></AccordionTrigger>
              <AccordionContent>
                <ul className={'flex flex-col gap-2'}>
                  <li><a href="#">Fees</a></li>
                  <li><a href="#">Referral Rewards</a></li>
                  <li><a href="#">BTPool Ambassador</a></li>
                  <li><a href="#">API</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>Support</h4></AccordionTrigger>
              <AccordionContent>
                <ul className={'flex flex-col gap-2'}>
                  <li><a href="#">Announcement Center</a></li>
                  <li><a href="#">Ticket</a></li>
                  <li><a href="#">Official Verification</a></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </footer>
  )
}

export default Footer
