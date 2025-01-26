import Logo from "@/components/theme/Logo";
// @ts-ignore
import {FaFacebook, FaTelegramPlane} from "react-icons/fa";
// @ts-ignore
import {BsTwitterX} from "react-icons/bs";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='flex z-40 flex-row bg-[#282936] py-12 px-8 ms:px-0'>
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
          <p className={'leading-[60px] text-white/60'}>Copyright © 2021 - 2025 BT-POOL</p>
        </div>
        <div className={'hidden w-full md:w-7/12 flex-col gap-6 md:grid md:grid-cols-3 text-white/60'}>

          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>About</h4>
            <ul className={'flex flex-col gap-2'}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>Assets</h4>
            <ul className={'flex flex-col gap-2'}>
              <li><Link href="/wallet/summary">My Assets</Link></li>
              <li><Link href="/wallet/bill">My Bills</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={'font-bold text-lg mb-2 text-white'}>Pool</h4>
            <ul className={'flex flex-col gap-2'}>
              <li><Link href="/pool/stats">Stats</Link></li>
              <li><Link href="/pool/worker">Worker</Link></li>
              <li><Link href="/pool/earning">Earning</Link></li>
            </ul>
          </div>
        </div>
        <div className="w-full z-40 md:hidden text-white">
          <Accordion type="single" collapsible>

            <AccordionItem value="item-2">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>About</h4></AccordionTrigger>
              <AccordionContent>
                <ul className={'flex flex-col gap-2'}>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/terms">Terms of Service</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>Assets</h4></AccordionTrigger>
              <AccordionContent>
                <ul className={'flex flex-col gap-2'}>
                  <li><Link href="/wallet/summary">My Assets</Link></li>
                  <li><Link href="/wallet/bill">My Bills</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger><h4 className={'font-bold text-lg mb-2 text-white'}>Pool</h4></AccordionTrigger>
              <AccordionContent>
                <ul className={'flex flex-col gap-2'}>
                  <li><Link href="/pool/stats">Stats</Link></li>
                  <li><Link href="/pool/worker">Worker</Link></li>
                  <li><Link href="/pool/earning">Earning</Link></li>
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
