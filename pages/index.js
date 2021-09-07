import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { socialMedia } from './data/profile';
import Navbar from './page/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aashish Bhatt - React Developer</title>
        <meta
          name='description'
          content='Portfolio of Aashish Bhatt | ERC | purwanchal campus | Computer Engineering '
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css'
          integrity='sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l'
          crossorigin='anonymous'
        />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer>
        <div className='d-flex flex-row fixed-bottom bg-dark  justify-content-center'>
          {socialMedia.map((social) => {
            return (
              <div key={social.id} className='d-flex flex-row m-2 '>
                <a href={social.link}>
                  <i
                    className={social.iconClass}
                    style={{
                      fontSize: '48px',
                      color: '#fff',
                    }}
                  ></i>
                </a>
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
