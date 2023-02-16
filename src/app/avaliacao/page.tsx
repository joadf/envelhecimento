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
                Avaliação personalizada para protocolos estéticos de alta performance!
              </h1>
              <p className="hero-description">
                Há mais de <strong>18 anos</strong> devolvendo autoestima para as pessoas, a Dra. Jô te ajuda a gerenciar seu processo de envelhecimento, realizando
                procedimentos estéticos com naturalidade, sem exageros,
                preservando seus traços naturais!
              </p>

              <div className="hero-flex-buttons">
                <a href="#cta" className="btn btn--full margin-right-sm">
                  Quero agendar minha avaliação!
                </a>

                <a href="#how-metodo" className="btn btn--outline">
                  Saiba mais &darr;
                </a>
              </div>

              <div className="delivered-meals">
                <div className="delivered-imgs">
                  <Image
                    src="/img/pacientes/paciente1.png"
                    alt="Foto do Jair José"
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
                alt="Foto da Dra. Jociene em sua mesa no momento da avaliação"
                width={1024}
                height={1364}
              />
            </div>
          </div>
        </section>
        
        <section id="how-metodo" className="section-how">
          <div className="container">
            <span className="subheading">
              Rejuvenescimento com naturalidade
            </span>
            <h3 className="heading-tertiary">
              Método de tratamento Top-bottom
            </h3>
            <p className="step-description">
              O método Top-bottom é um método de estruturação facial criado pela
              Dra. Jô, no qual ela estrutura toda a face do paciente e realiza
              os protocolos de forma que todos os tecidos faciais fiquem
              sustentados. Este método é eficaz, pois por entendermos que uma
              estrutura facial sustenta a outra, ao aplicarmos este método,
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
              <h3 className="heading-tertiary">Toxina Botulínica (Botox)</h3>
              <p className="step-description">
                A toxina botulínica é utilizada para prevenir ou amenizar rugas
                e linhas de expressão. Pode ser aplicada em diversas regiões
                faciais e corporais, porém seu uso estético é mais abrangente no
                terço superior e terço médio da face.
              </p>
            </div>

            <div className="step-img-box">
              <Image
                src="/img/procedimentos/toxina-botulinica.jpg"
                className="step-img"
                alt="Antes e depois de uma paciente de toxina botulínica"
                width={1024}
                height={1008}
              />
            </div>

            <div className="step-img-box">
              <Image
                src="/img/procedimentos/bioestimuladores-colageno.jpg"
                className="step-img"
                alt="Antes e depois de um paciente de bioestimuladores de colágeno"
                width={1024}
                height={946}
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">02</p>
              <h3 className="heading-tertiary">Bioestiuladores de colágeno</h3>
              <p className="step-description">
                Bioestimuladores são substâncias que estimulam a produção de
                colágeno, podendo ser aplicado em todo o corpo para tratar
                flacidez. Seu uso é recomendado para pacientes já a partir dos
                25 anos de idade, promovendo uma poupança de colágeno que é a
                proteina responsável por manter nossa pele firme ao longo da
                vida.
              </p>
            </div>

            <div className="step-text-box">
              <p className="step-number">03</p>
              <h3 className="heading-tertiary">Fios de PDO</h3>
              <p className="step-description">
                Os Fios de PDO ou Fios de Sustentação podem ser utilizados em
                todo o corpo para estimular colágeno. Eles são 100% absorvíveis
                pelo nosso organismo e promovem um efeito lifting ao estimular a
                produção de colágeno na região tratada.
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
                alt="Antes e depois de um paciente de preenchimento com ácido hialurônico"
                width={1024}
                height={1024}
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">04</p>
              <h3 className="heading-tertiary">
                Preenchimento com ácido hialurônico
              </h3>
              <p className="step-description">
                O ácido hialurônico é um material biocompatível com nosso
                organismo. Ele proporciona volume nos sulcos causados pelo
                envelhecimento e hidrata profundamente a pele, proporcionando
                rejuvenecimento.
              </p>
            </div>

            <div className="step-text-box">
              <p className="step-number">05</p>
              <h3 className="heading-tertiary">
                Método Top-bottom é igual a autoestima
              </h3>
              <p className="step-description">
                Entendemos por autoestima um estado de espírito, onde buscamos
                consolidar visualmente aquelas características no espelho, não é
                mesmo? A busca pela autoestima é algo individual, mas que
                requer, muitas vezes, a ajuda de um profissional capacitado para
                dar o direcionamento adequado em momentos em que nos sentimos
                com a autoestima baixa. É para isso que desenvolvemos todo esse
                trabalho ao longo dos anos, buscando entender que cada ser é
                individual, tem gostos diferentes, perspectivas diferentes, mas
                que acima de tudo, quer estar bem consigo mesmo. Realizar
                procedimentos estéticos não visam a perfeição, mas sim fazer
                você voltar a se olhar com aquele amor próprio e aquela
                autoconfiança novamente. É para isso que estamos aqui e com
                nossa experiência podemos te ajudar nesta caminhada, te ajudando
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

        <section className="section-testimonials" id="testimonials">
          <div className="testimonials-container">
            <span className="subheading">Depoimentos</span>
            <h2 className="heading-secondary">
              &quot;Não é apenas sobre estética, é sobre a diferença que você
              faz na vida das pessoas&quot;. Dra. Jô
            </h2>

            <div className="testimonials">
              <div className="testimonial">
                <Image
                  src="/img/depoimentos/gaby.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botulínica"
                  width={1080}
                  height={1685}
                />
              </div>

              <div className="testimonial">
                <Image
                  src="/img/depoimentos/juliana.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botulínica"
                  width={1080}
                  height={1684}
                />
              </div>

              <div className="testimonial">
                <Image
                  src="/img/depoimentos/francine.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botulínica"
                  width={1080}
                  height={1731}
                />
              </div>

              <div className="testimonial">
                <Image
                  src="/img/depoimentos/sara.jpg"
                  className="step-img-medium"
                  alt="Antes e depois de uma paciente de toxina botulínica"
                  width={1076}
                  height={1684}
                />
              </div>
            </div>
            <br/><br/><br/>
            <div className="container">
              <div className="grid">
                <a href="#cta" className="btn btn--full margin-right-sm">
                  Quero agendar minha avaliação!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="how-dra-jo" className="section-how">
          <div className="container">
            <h3 className="heading-tertiary">Quem é a Dra. Jô?</h3>
            <p className="step-description">
              Com mais de 18 anos de experiência no ramo da estética, a Dra.
              Jociene Andrade é uma renomada especialista em harmonização facial
              e corporal da grande Curitiba. Sua formação acadêmica inclui
              estética e cosmética, farmácia, pós-graduação em estética e
              cosmética, bem como residência em harmonização facial aplicada.
              Mas não para por aí, ela está em constante aprimoramento pessoal e
              atualmente está cursando medicina.
            </p>
            <p className="step-description">
              Começou sua vida na estética aos 14 anos, trabalhando em salão de
              beleza, onde atuou como manicure, depiladora e micropigmentadora,
              além de ter ministrado diversos cursos nessas áreas. Viu que sua
              missão de vida era trabalhar com a autoestima das pessoas.
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
                Por isso, sua primeira graduação foi estética e cosmética, um
                curso que lhe mostrou que estética é muito mais do que apenas
                procedimentos de luxo e beleza, mas sim o resgate da autoestima
                das pessoas. Focada em dar segmento e atuar com outros
                procedimentos de estética avançada, graduou-se em farmácia, um
                curso que lhe proporcionou conhecimento sobre o corpo humano e
                aplicabilidade clínica dos medicamentos, o que lhe possibilitou
                trabalhar com mais segurança na estética avançada.
              </p>
              <p className="step-description">
                Além disso, realizou pós-graduação em estética e cosmética
                aplicada, ganhando mais experiência para a prática clínica. Com
                seus objetivos já alinhados, de que a parte prática é o que lhe
                daria mais segurança para atender seus pacientes, realizou
                residência em harmonização facial, um curso que lidava com
                diversos casos reais de disfunções estéticas, onde ganhou muita
                experiência para seus aprimoramentos profissionais. Ainda nesta
                residência, já apaixonada pelos protocolos mais avançados,
                decidiu que queria cursar medicina, visando sempre buscar mais
                conhecimento para atender seus pacientes, o que hoje é um curso
                que lhe traz extrema satisfação.
              </p>
              <p className="step-description">
                A estética escolheu a Dra. Jô há muitos anos atrás e ela foi
                apenas lapidando todos os pilares necessários para tornar a
                profissional que é hoje, competente, apaixonada pelo seu
                trabalho e comprometida com seus pacientes e que está sempre em
                busca de conhecimento e evolução.
              </p>
            </div>
          </div>

          <div className="container">
              <div className="grid">
                <a href="#cta" className="btn btn--full margin-right-sm">
                  Quero agendar minha avaliação!
                </a>
              </div>
            </div>
        </section>

        <section className="section-cta" id="cta">
          <div className="container">
            <div className="cta">
              <div className="cta-text-box">
                <h2 className="heading-secondary">Agende sua avaliação!</h2>
                
                <Form/>
                
              </div>
              <div
                className="cta-img-box"
                role="img"
                aria-label="Dra. Jô descrevendo uma avaliação personalizada em sua mesa"
              ></div>
            </div>
          </div>
        </section>

        <section className="section-meals" id="meals">
          <div className="container center-text">
            <span className="subheading">Atendimentos no Cabral</span>
            <h2 className="heading-secondary">
              EJ Estética de Alta Performance
            </h2>
            <h3 className="heading-tertiary">
                Av. Paraná 202 - Sala 902 - Cabral - Curitiba - PR
            </h3>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="address-col">
            <p className="footer-heading">Contatos</p>
            <address className="contacts">
              <p className="address">
              <span>Endereço: </span>
                <a
                  className="footer-link"
                  target="_blank"
                  href="https://www.google.com/maps/place/Av.+Paran%C3%A1,+202+-+Cabral,+Curitiba+-+PR,+80035-130/@-25.4092954,-49.2564163,17.18z/data=!4m6!3m5!1s0x94dce4263c45e0cd:0x83f38d756f94e8d3!8m2!3d-25.4089878!4d-49.2545642!16s%2Fg%2F11cnchp8_8"
                  rel="noreferrer"
                >
                  Av. Paraná 202 - Sala 902 - Cabral - Curitiba - PR
                </a>
              </p>
              <p>
                <span>Telefone: </span>
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
                <span>Whatsapp: </span>
                <a
                  className="footer-link"
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=5541992884321&text&type=phone_number&app_absent=0"
                  rel="noreferrer"
                >
                  (41) 99288-4321
                </a>
                <br />
                <br />
                <span>Instagram: </span>
                <a
                  className="footer-link"
                  target="_blank"
                  href="https://instagram.com/dra.jociene.andrade"
                  rel="noreferrer"
                >
                  @dra.jociene.andrade
                </a>
              </p>
            </address>
          </div>
        </div>

        <a href="https://bit.ly/whatsapp_landing_page_via_bio" className="whats-btn" target="_blank">
          <i className="fa fa-whatsapp whats-btn-icon"></i>
        </a>

      </footer>
    </>
  )
}
