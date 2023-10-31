"use client";

import Image from 'next/image';
import styles from './index.module.css';
import { Button } from '@/components/button';

export async function Login() {
  return (
    <div className={styles.container}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />

      <input type="email" name="email" />
      <input type="password" name="password" />

      <Button>
        Entrar
      </Button>
    </div>
  )
}