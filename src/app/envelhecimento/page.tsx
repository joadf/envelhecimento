import './styles.css'

import Image from 'next/image'
import Script from 'next/script'
import { Form } from '../../components/Form'

export default function Home() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SW67Q3WR3D"
        strategy="afterInteractive"
      />
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '877232926828950');
          fbq('track', 'PageView');
          <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=877232926828950&ev=PageView&noscript=1"
          /></noscript>
        `}
      </Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SW67Q3WR3D');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "fplq1eufih");
        `}
      </Script>
      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                A hora de cuidar do seu envelhecimento ?? agora!
              </h1>
              <p className="hero-description">
                Te ajudo a gerenciar seu processo de envelhecimento realizando
                procedimentos est??ticos com naturalidade, sem exageros,
                preservando seus tra??os naturais!
              </p>
              <a href="#cta" className="btn btn--full margin-right-sm">
                Agende sua avalia????o!
              </a>

              <a href="#how1" className="btn btn--outline">
                Saiba mais &darr;
              </a>
              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <Image
                    src="/img/pacientes/paciente1.png"
                    alt="Foto do Jair Jos??"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/pacientes/paciente2.png"
                    alt="Foto de Paciente"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/pacientes/paciente3.png"
                    alt="Foto de Paciente"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/pacientes/paciente4.png"
                    alt="Foto de Paciente"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/img/pacientes/paciente5.png"
                    alt="Foto de Paciente"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="delivered-text">
                  Mais de <b>2.000</b> pacientes satisfeitos!
                </p>
              </div>
            </div>
            <div className="hero-img-box">
              <Image
                className="hero-img"
                src="/img/fotos/dra-jociene-andrade.jpg"
                alt="Foto da Dra. Jociene em sua mesa no momento da avalia????o"
                width={1024}
                height={1364}
              />
            </div>
          </div>
        </section>

        <section className="section-how" id="how1">
          <div className="container">
            <h3 className="heading-tertiary">Quem ?? a Dra. J???</h3>
            <p className="step-description">
              Com mais de 18 anos de experi??ncia no ramo da est??tica, a Dra.
              Jociene Andrade ?? uma renomada especialista em harmoniza????o facial
              e corporal da grande Curitiba. Sua forma????o acad??mica inclui
              est??tica e cosm??tica, farm??cia, p??s-gradua????o em est??tica e
              cosm??tica, bem como resid??ncia em harmoniza????o facial aplicada.
              Mas n??o para por a??, ela est?? em constante aprimoramento pessoal e
              atualmente est?? cursando medicina.
            </p>
            <p className="step-description">
              Come??ou sua vida na est??tica aos 14 anos, trabalhando em sal??o de
              beleza, onde atuou como manicure, depiladora e micropigmentadora,
              al??m de ter ministrado diversos cursos nessas ??reas. Viu que sua
              miss??o de vida era trabalhar com a autoestima das pessoas.
            </p>
          </div>

          <br />

          <div className="container grid grid--2-cols grid--start-v">
            <div className="step-img-box">
              <Image
                src="/img/fotos/dra-jo.jpg"
                className="hero-img"
                alt="Foto da Dra. Jociene Andrade"
                width={1024}
                height={1368}
              />
            </div>
            <div className="step-text-box">
              <p className="step-description">
                Por isso, sua primeira gradua????o foi est??tica e cosm??tica, um
                curso que lhe mostrou que est??tica ?? muito mais do que apenas
                procedimentos de luxo e beleza, mas sim o resgate da autoestima
                das pessoas. Focada em dar segmento e atuar com outros
                procedimentos de est??tica avan??ada, graduou-se em farm??cia, um
                curso que lhe proporcionou conhecimento sobre o corpo humano e
                aplicabilidade cl??nica dos medicamentos, o que lhe possibilitou
                trabalhar com mais seguran??a na est??tica avan??ada.
              </p>
              <p className="step-description">
                Al??m disso, realizou p??s-gradua????o em est??tica e cosm??tica
                aplicada, ganhando mais experi??ncia para a pr??tica cl??nica. Com
                seus objetivos j?? alinhados, de que a parte pr??tica ?? o que lhe
                daria mais seguran??a para atender seus pacientes, realizou
                resid??ncia em harmoniza????o facial, um curso que lidava com
                diversos casos reais de disfun????es est??ticas, onde ganhou muita
                experi??ncia para seus aprimoramentos profissionais. Ainda nesta
                resid??ncia, j?? apaixonada pelos protocolos mais avan??ados,
                decidiu que queria cursar medicina, visando sempre buscar mais
                conhecimento para atender seus pacientes, o que hoje ?? um curso
                que lhe traz extrema satisfa????o.
              </p>
              <p className="step-description">
                A est??tica escolheu a Dra. J?? h?? muitos anos atr??s e ela foi
                apenas lapidando todos os pilares necess??rios para tornar a
                profissional que ?? hoje, competente, apaixonada pelo seu
                trabalho e comprometida com seus pacientes e que est?? sempre em
                busca de conhecimento e evolu????o.
              </p>
            </div>
          </div>

          <div className="container">
              <div className="grid">
                <a href="#cta" className="btn btn--full margin-right-sm">
                  Quero agendar minha avalia????o!
                </a>
              </div>
            </div>
        </section>

        <section className="section-how" id="how2">
          <div className="container">
            <span className="subheading">
              Rejuvenescimento com naturalidade
            </span>
            <h3 className="heading-tertiary">
              M??todo de tratamento Top-bottom
            </h3>
            <p className="step-description">
              O m??todo Top-bottom ?? um m??todo de estrutura????o facial criado pela
              Dra. J??, no qual ela estrutura toda a face do paciente e realiza
              os protocolos de forma que todos os tecidos faciais fiquem
              sustentados. Este m??todo ?? eficaz, pois por entendermos que uma
              estrutura facial sustenta a outra, ao aplicarmos este m??todo,
              estamos respeitando a anatomia e a fisiologia facial, realizando
              os procedimentos na ordem adequada de tratamento.
            </p>
          </div>

          <br />
          <br />

          <div className="container">
            <h3 className="heading-tertiary">
              Principais procedimentos realizados:
            </h3>
          </div>

          <br />
          <br />

          <div className="container grid grid--2-cols grid--center-v">
            <div className="step-text-box">
              <p className="step-number">01</p>
              <h3 className="heading-tertiary">Toxina Botul??nica (Botox)</h3>
              <p className="step-description">
                A toxina botul??nica ?? utilizada para prevenir ou amenizar rugas
                e linhas de express??o. Pode ser aplicada em diversas regi??es
                faciais e corporais, por??m seu uso est??tico ?? mais abrangente no
                ter??o superior e ter??o m??dio da face.
              </p>
            </div>

            <div className="step-img-box">
              <Image
                src="/img/procedimentos/toxina-botulinica.jpg"
                className="step-img"
                alt="Antes e depois de uma paciente de toxina botul??nica"
                width={1024}
                height={1008}
              />
            </div>

            <div className="step-img-box">
              <Image
                src="/img/procedimentos/bioestimuladores-colageno.jpg"
                className="step-img"
                alt="Antes e depois de um paciente de bioestimuladores de col??geno"
                width={1024}
                height={946}
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">Bioestiuladores de col??geno</h3>
              <p className="step-description">
                Bioestimuladores s??o subst??ncias que estimulam a produ????o de
                col??geno, podendo ser aplicado em todo o corpo para tratar
                flacidez. Seu uso ?? recomendado para pacientes j?? a partir dos
                25 anos de idade, promovendo uma poupan??a de col??geno que ?? a
                proteina respons??vel por manter nossa pele firme ao longo da
                vida.
              </p>
            </div>

            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">Fios de PDO</h3>
              <p className="step-description">
                Os Fios de PDO ou Fios de Sustenta????o podem ser utilizados em
                todo o corpo para estimular col??geno. Eles s??o 100% absorv??veis
                pelo nosso organismo e promovem um efeito lifting ao estimular a
                produ????o de col??geno na regi??o tratada.
              </p>
            </div>
            <div className="step-img-box">
              <Image
                src="/img/procedimentos/fios-pdo.jpg"
                className="step-img"
                alt="Antes e depois de uma paciente de fios de pdo"
                width={1024}
                height={1024}
              />
            </div>

            <div className="step-img-box">
              <Image
                src="/img/procedimentos/preenchimento-acido-hialuronico.jpg"
                className="step-img"
                alt="Antes e depois de um paciente de preenchimento com ??cido hialur??nico"
                width={1024}
                height={1024}
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">04</p>
              <h3 className="heading-tertiary">
                Preenchimento com ??cido hialur??nico
              </h3>
              <p className="step-description">
                O ??cido hialur??nico ?? um material biocompat??vel com nosso
                organismo. Ele proporciona volume nos sulcos causados pelo
                envelhecimento e hidrata profundamente a pele, proporcionando
                rejuvenecimento.
              </p>
            </div>

            <div className="step-text-box">
              <p className="step-number">05</p>
              <h3 className="heading-tertiary">
                M??todo Top-bottom ?? igual a autoestima
              </h3>
              <p className="step-description">
                Entendemos por autoestima um estado de esp??rito, onde buscamos
                consolidar visualmente aquelas caracter??sticas no espelho, n??o ??
                mesmo? A busca pela autoestima ?? algo individual, mas que
                requer, muitas vezes, a ajuda de um profissional capacitado para
                dar o direcionamento adequado em momentos em que nos sentimos
                com a autoestima baixa. ?? para isso que desenvolvemos todo esse
                trabalho ao longo dos anos, buscando entender que cada ser ??
                individual, tem gostos diferentes, perspectivas diferentes, mas
                que acima de tudo, quer estar bem consigo mesmo. Realizar
                procedimentos est??ticos n??o visam a perfei????o, mas sim fazer
                voc?? voltar a se olhar com aquele amor pr??prio e aquela
                autoconfian??a novamente. ?? para isso que estamos aqui e com
                nossa experi??ncia podemos te ajudar nesta caminhada, te ajudando
                a gerenciar, ao longo de toda a sua vida, o seu processo de
                envelhecimento, mantendo sua autoestima elevada em todas as
                fases de sua vida.
              </p>
            </div>
            <div className="step-img-box">
              <Image
                src="/img/procedimentos/autoestima.jpg"
                className="step-img"
                alt="Antes e depois de uma paciente de fios de pdo"
                width={1024}
                height={1020}
              />
            </div>
          </div>
        </section>

        <section className="section-how" id="how3">
          <div className="container">
            <span className="subheading">
              Voc?? d?? valor ao seu tempo e ao seu dinheiro?
            </span>
            <p className="step-description">
              N??o existe tratamento sem planejamento e por entender o quanto o
              nosso tempo ?? precioso, firmamos a premissa de te dar prioridade
              em nosso atendimento. Nosso objetivo ?? atender pacientes
              conscientes que entendem o valor de nossa responsabilidade
              profissional para com a sua sa??de. Por isso, uma avalia????o de
              qualidade ?? essencial e obrigat??ria para firmamos esse
              compromisso.
            </p>
            <br/><br/>
            <div className="grid">
              <a href="#cta" className="btn btn--full margin-right-sm">
                Quero agendar minha avalia????o com responsabilidade!
              </a>
            </div>
          </div>
        </section>

        <section className="section-meals" id="meals">
          <div className="container center-text">
            <span className="subheading">Atendimentos no Cabral</span>
            <h2 className="heading-secondary">
              EJ Est??tica de Alta Performance
            </h2>
            <h3 className="heading-tertiary">
                Av. Paran?? 202 - Sala 902 - Cabral - Curitiba - PR
            </h3>
          </div>

          <div id="carousel" className="container grid">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="3"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="4"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="5"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="6"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="7"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="8"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance7.webp?auto=yes&bg=777&fg=555&text=Primeiro Slide"
                    alt="Foto de frente da sala da Dra. J??, mostrando a mesa, cadeira, decora????o em detalhes clean nas cores branca, bege e lil??s"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance3.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto da bancadinha de caf?? da EJ Est??tica, com xicaras azuis, ta??as na cor prata e uma garrafa t??rmica"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance4.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto da segunda sala de recep????o com dois sofazinhos e uma planta ao lado"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance5.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto da vista do sofazinho da segunda sala de recep????o com vista para a sala da Dra. J??"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance6.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto a??rea da sala da Dra. J?? de frente para a sua mesa"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance2.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto da bancada de recep????o da EJ Est??tica"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance8.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto da parte interna da sala da Dra. J??, mostrando a decora????o e a maca de procedimentos"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance9.webp?auto=yes&bg=666&fg=444&text=Segundo Slide"
                    alt="Foto da sala da Dra. Elenita, mostrando os detalhes internos de sua sala"
                    width={1000}
                    height={450}
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    className="d-block w-100"
                    src="/img/clinica/EJ-estetica-de-alta-performance10.webp?auto=yes&bg=555&fg=333&text=Terceiro Slide"
                    alt="Foto da decora????o da sala da Dra. J??"
                    width={1000}
                    height={450}
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Anterior</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Pr??ximo</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section-testimonials" id="testimonials">
          <div className="testimonials-container">
            <span className="subheading">Depoimentos</span>
            <h2 className="heading-secondary">
              &quot;N??o ?? apenas sobre est??tica, ?? sobre a diferen??a que voc??
              faz na vida das pessoas&quot;. Dra. J??
            </h2>

            <div className="testimonials">
              <div className="testimonial">
                <Image
                  src="/img/depoimentos/gaby.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botul??nica"
                  width={1080}
                  height={1685}
                />
              </div>

              <div className="testimonial">
                <Image
                  src="/img/depoimentos/juliana.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botul??nica"
                  width={1080}
                  height={1684}
                />
              </div>

              <div className="testimonial">
                <Image
                  src="/img/depoimentos/francine.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botul??nica"
                  width={1080}
                  height={1731}
                />
              </div>

              <div className="testimonial">
                <Image
                  src="/img/depoimentos/sara.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botul??nica"
                  width={1076}
                  height={1684}
                />
              </div>
            </div>
            <br/><br/><br/>
            <div className="container">
              <div className="grid">
                <a href="#cta" className="btn btn--full margin-right-sm">
                  Quero agendar minha avalia????o!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-cta" id="cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">Agende sua avalia????o!</h2>
                <p className="cta-text">
                    A avalia????o ?? indispens??vel para um atendimento de
                    qualidade... Agenda com vagas limitadas!
                </p>
                <Form/>
              </div>
              <div
                className="cta-img-box"
                role="img"
                aria-label="Dra. J?? descrevendo uma avalia????o personalizada em sua mesa"
              ></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <Image
                className="footer-logo"
                alt="Logo Dra. Jociene Andrade"
                src="/img/logo-comprida.png"
                width={466}
                height={100}
              />
            </a>

            <ul className="social-links">
              <li>
                <div className="footer-instagram">
                  <a
                    className="footer-link"
                    target="_blank"
                    href="https://www.instagram.com/dra.jociene.andrade/"
                    rel="noreferrer"
                  >
                    {/* <ion-icon className="social-icon" name="logo-instagram"></ion-icon> */}
                  </a>
                  <a
                    className="footer-link"
                    target="_blank"
                    href="https://www.instagram.com/dra.jociene.andrade/"
                    rel="noreferrer"
                  >
                    @dra.jociene.andrade
                  </a>
                </div>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2023</span> Dra. Jociene
              Andrade. Todos os direitos reservados.
            </p>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contatos</p>
            <address className="contacts">
              <p className="address">
                <a
                  className="footer-link"
                  target="_blank"
                  href="https://www.google.com/maps/place/Av.+Paran%C3%A1,+202+-+Cabral,+Curitiba+-+PR,+80035-130/@-25.4092954,-49.2564163,17.18z/data=!4m6!3m5!1s0x94dce4263c45e0cd:0x83f38d756f94e8d3!8m2!3d-25.4089878!4d-49.2545642!16s%2Fg%2F11cnchp8_8"
                  rel="noreferrer"
                >
                  Av. Paran?? 202 - Sala 902 - Cabral - Curitiba - PR
                </a>
              </p>
              <p>
                <span>Telefone:</span>
                <a
                  className="footer-link"
                  target="_blank"
                  href="tel:36063424"
                  rel="noreferrer"
                >
                  (41) 3606-3424
                </a>
                <br />
                <br />
                <span>Whatsapp:</span>
                <a
                  className="footer-link"
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=5541992884321&text&type=phone_number&app_absent=0"
                  rel="noreferrer"
                >
                  (41) 99288-4321
                </a>
              </p>
            </address>
          </div>
        </div>
      </footer>
    </>
  )
}
