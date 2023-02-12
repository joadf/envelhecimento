import './styles.css'

import { useEffect } from 'react'

import Image from 'next/image'

export default async function Obrigada() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                Obrigada pelo interesse na avaliação!
              </h1>
              <p className="hero-description">
                Já salvamos seu contato e logo iremos entrar em contato contigo para agendar o seu horário!
              </p>
              <p className="hero-description">
                Te aguado em breve em meu consultório para tirar todas as suas dúvidas e te deixar ainda mais linda!
              </p>
              <a href="https://bit.ly/whatsapp_ej_estetica" target="_blank" className="btn btn--full margin-right-sm">
                Chamar no whatsapp!
              </a>
            </div>
            <div className="hero-img-box">
              <Image
                className="hero-img"
                src="/img/fotos/dra-jociene-andrade.jpg"
                alt="Foto da Dra. Jociene em sua mesa no momento da avaliação"
                width={1024}
                height={1364}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}