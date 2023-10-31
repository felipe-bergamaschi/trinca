"use client";

import Image from 'next/image';
import styles from './index.module.css';
import { Button } from '@/components/button';
import { TextField } from '@/components/form/textField';

export async function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />

        <TextField
          type='email'
          name='email'
          label='E-mail'
          placeholder='Digite seu e-mail'
        />

        <TextField
          type='password'
          name='password'
          label='Senha'
          placeholder='Digite sua senha'
        />

        <Button fullWidth>
          Entrar
        </Button>
      </div>
    </div>
  )
}