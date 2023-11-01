"use client";

import Image from 'next/image';
import styles from './index.module.css';
import { Button } from '@/components/button';
import { TextField } from '@/components/form/textField';
import { Text } from '@/components/text';

export async function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/logo-black.svg"
          alt="Logo"
          width={52}
          height={52}
          priority
        />

        <div className={styles.text}>
          <Text variant='h1'>
            Bem vindo de volta!
          </Text>

          <Text color='secondary'>
            Faça login para continuar
          </Text>
        </div>

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