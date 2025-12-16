'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Fuzzy_Bubbles } from 'next/font/google';

import ButtonPage from '@/app/components/button/page';
import InputPage from '@/app/components/input/page';

export const fuzzy = Fuzzy_Bubbles({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function LoginPage()     {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit() {
    if (!email.includes('@')) {
      setErro('Email inválido');
      return;
    }

    if (!/[^a-zA-Z0-9]/.test(senha)) {
      setErro('A senha precisa ter pelo menos um caractere especial');
      return;
    }

    setErro('');
    router.push('/home');
  }

  return (
    <main className="flex h-screen w-screen bg-[#FFFDF1]">
      <div className="bg-[#5F8861] w-[40vw] flex items-center justify-center flex-col gap-10">
        <div className="flex items-center">
          <img src="logo.png" width={70} />
          <h1 className={`${fuzzy.className} text-[2.5rem] font-semibold text-[#FFF9D8]`}>
            Kanboard
          </h1>
        </div>

        <InputPage
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputPage
          type="password"
          placeholder="Enter your password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && <p className="text-red-200 text-sm">{erro}</p>}

        <span onClick={handleSubmit}>
          <ButtonPage>
            <p className={`${fuzzy.className} text-[1.3rem] font-semibold text-[#5F8861]`}>
              Sign up now
            </p>
          </ButtonPage>
        </span>
      </div>

      <div className="flex justify-center items-center w-[60vw]">
        <img src="undraw.png" width={450} />
      </div>
    </main>
  );
}
