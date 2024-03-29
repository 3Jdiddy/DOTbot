import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import BotMsg from '../components/botMsg';
import TextBox from '@/components/TextBox';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [value, setValue] = React.useState<string>('');
  const [prompt, setPrompt] = React.useState<string>('');
  const [completion, setCompletion] = React.useState<string>('');

  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    }, []);

  const handleKeyDown = React.useCallback(
    async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        setPrompt(value);
        setCompletion('Loading...');
        const response = await fetch('/api/hello', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: value }),
        });
        const data = await response.json();
        setValue('');
        setCompletion(data.result.choices[0].text);
      }
    }, [value]);

  return (
    <>
    <Head>
        <title>DOT Bot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/flightChat.png" />
      </Head>

    <div>
      <div>Please type your prompt</div>
      <input value={value} onChange={handleInput} onKeyDown={handleKeyDown} />
      <div>Prompt: {prompt}</div>
      <div>Completion: {completion.split('\n').map(item => <>{item}<br/></>)}</div>
    </div>
    </>
  );
};

export default Home;