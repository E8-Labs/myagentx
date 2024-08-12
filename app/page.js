'use client'
import Animation from '@/components/animation/Animation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    router.push('/user/onboarding')
  }, [])
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (currentIndex === 6) {
      setTimeout(() => {
        console.log("Ready to navigate");
      }, 500)
    }
  }, [currentIndex])

  return (
    <div className='w-full' style={{ height: "100vh", display: 'flex', alignItems: "center", width: "" }}>
    </div>
  );
}
