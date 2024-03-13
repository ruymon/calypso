import { siteConfig } from "@/config/site";
import { BASE_URL_WITHOUT_PROTOCOL } from "@/constants/url";

export default {
  "languages.english": "Inglês",
  "languages.portuguese": "Português do Brasil",

  "common.openApp": "Abrir app",
  "common.close": "Fechar",
  "common.joinDiscord": "Entrar no Discord",
  "common.contactSupport": "Contatar suporte",

  "loading.title": "Carregando",
  "loading.subtitle": "Isso deve levar alguns segundos",
  "loading.tipOfTheDay": "Dica do dia",
  "loading.tipOfTheDay.content":
    "Você pode alterar o tema da interface no menu de configurações",

  "landing.hero.hat": "Programa de teste -> Embarque imediato",
  "landing.hero.title": "A ferramenta que você não sabia que precisava.",
  "landing.hero.subtitle": `${siteConfig.name} é a ferramenta para simuleiros que desejam acompanhar voos em tempo real, informações meteorológicas e muito mais.`,
  "landing.hero.button": "Solicitar acesso antecipado",
  "landing.hero.scroll": "Duvido você ler até o final",

  "landing.features.hat": "Sem enrolação.",
  "landing.features.title":
    "Não vamos gastar seu tempo com funcionalidades que você não precisa.",
  "landing.features.subtitle":
    "Desde o início, estamos comprometidos em ser um projeto orientado pela comunidade. Estamos aqui para construir as funcionalidades que você deseja, não as que achamos que você precisa. Aqui estão algumas das funcionalidades nas quais estamos trabalhando agora.",
  "landing.features.idPrefix": "funcionalidade",
  "landing.features.status.planned": "Planejado",
  "landing.features.status.inProgress": "Em desenvolvimento",
  "landing.features.status.completed": "Concluído",
  "landing.features.feature1.title": "Voos em tempo real",
  "landing.features.feature1.subtitle":
    "Exibir voos ativos nas redes Vatsim e IVAO.",
  "landing.features.feature2.title": "Diagrama do aeródromo no mapa",
  "landing.features.feature2.subtitle":
    "Desenhar e exibir o contorno e informações de taxiways, pistas, posições de estacionamento e hangares no mapa ao ampliar.",
  "landing.features.feature3.title": "Informações meteorológicas",
  "landing.features.feature3.subtitle":
    "Exibir informações de meteorológicas no mapa, incluindo radar meteorológico, imagens de satélite e SIGMET.",
  "landing.features.feature4.title": "Filtros avançados",
  "landing.features.feature4.subtitle":
    "Filtrar voos por companhia aérea, tipo de aeronave, posição atual e muito mais.",
  "landing.features.button": "Entrar no Discord",

  "landing.callToAction.hat": "Programa de acesso antecipado",
  "landing.callToAction.title": `Seja um dos primeiros a experimentar o ${siteConfig.name}!`,
  "landing.callToAction.subtitle":
    "Junte-se a nós no Discord para obter acesso antecipado e ajudar a moldar o futuro da aviação virtual.",
  "landing.callToAction.button": "Entrar no Discord",

  "landing.footer.builtBy": "Construído pela comunidade para a comunidade.",
  "landing.footer.privacy": "Política de Privacidade",
  "landing.footer.terms": "Termos de Serviço",

  "auth.login.title": "Bem-vindo de volta!",
  "auth.login.subtitle": "Faça login na sua conta para continuar.",
  "auth.login.email": "E-mail",
  "auth.login.password": "Senha",
  "auth.login.signIn": "Entrar",
  "auth.login.forgotPassword": "Esqueceu a senha?",
  "auth.login.noAccount": "Sem conta?",
  "auth.login.join": "Junte-se agora",

  "auth.join.inviteOnly":
    "Pedimos desculpas, mas o registro está atualmente disponível apenas por convite.",

  "auth.forgotPassword.title": "Esqueceu sua senha?",
  "auth.forgotPassword.subtitle": "Digite seu e-mail para redefinir sua senha.",
  "auth.forgotPassword.email": "E-mail",
  "auth.forgotPassword.sendEmail": "Enviar e-mail de recuperação",
  "auth.forgotPassword.backToLogin": "Lembrou da sua senha?",

  "auth.disabled.title": "Conta desativada!",
  "auth.disabled.subtitle":
    "Sua conta foi desativada. Entre em contato com o suporte para obter mais informações.",

  "auth.supportCard.title": "Problema?",

  "onboarding.welcome.hat": "Olá!",
  "onboarding.welcome.title": `Bem-vindo ao ${siteConfig.name}!`,
  "onboarding.welcome.subtitle":
    "Estamos animados por você estar aqui. Vamos começar com alguns detalhes básicos.",
  "onboarding.welcome.getStarted": "Get started",

  "onboarding.integrations.hat": "Integrações",
  "onboarding.integrations.title": "Sincronize suas contas",
  "onboarding.integrations.subtitle":
    "Conecte suas contas para sincronizar seus contatos e eventos de calendário.",
  "onboarding.integrations.skip": "Continuar sem sincronizar",

  "onboarding.finish.hat": "Tudo pronto!",
  "onboarding.finish.title": "Vamos começar?",
  "onboarding.finish.subtitle": `Você está pronto para começar a usar o ${siteConfig.name}?`,
  "onboarding.finish.getStarted": "Começar",

  "app.flightDetails.altitude": "Altitude",
  "app.flightDetails.groundSpeed": "Velocidade do solo",
  "app.flightDetails.heading": "Rumo",
  "app.flightDetails.transponder": "Transponder",
  "app.flightDetails.locationDetails.title": "Rota",
  "app.flightDetails.locationDetails.subtitle":
    "Informações sobre a rota da aeronave.",

  "app.flightDetails.airport.departure": "Partida",
  "app.flightDetails.airport.arrival": "Chegada",
  "app.flightDetails.airport.alternate": "Alternativo",
  "app.flightDetails.airport.alternate2": "Alternativo secundário",

  "app.flightDetails.aircraftDetails.title": "Detalhes da aeronave",
  "app.flightDetails.aircraftDetails.subtitle":
    "Informações sobre a aeronave e seu estado atual.",

  "app.flightDetails.aircraft.registration": "Matrícula",
  "app.flightDetails.aircraft.transponder": "Transponder",
  "app.flightDetails.aircraft.wakeTurbulence": "Esteira de turbulência",

  "app.flightDetails.crewDetails.title": "Detalhes da tripulação",
  "app.flightDetails.crewDetails.subtitle":
    "Informações sobre a tripulação a bordo da aeronave.",

  "app.flightDetails.crew.pilotInCommand": "Piloto em comando",

  "app.flightDetails.flightPlanDetails.title": "Detalhes do plano de voo",
  "app.flightDetails.flightPlanDetails.subtitle":
    "Informações sobre o plano de voo atual.",

  "legal.terms.title": "Termos e Condições",
  "legal.terms.topic1.title": "1. Termos",
  "legal.terms.topic1.content": `Ao acessar este site, acessível em ${BASE_URL_WITHOUT_PROTOCOL}, você concorda em ficar vinculado a estes Termos e Condições de Uso do Site e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você discordar de qualquer um desses termos, está proibido de acessar este site. Os materiais contidos neste site são protegidos por leis de direitos autorais e marcas registradas.`,
  "legal.terms.topic2.title": "2. Licença de Uso",
  "legal.terms.topic2.content": `É concedida permissão para baixar os materiais (informações ou software) no site ${siteConfig.name} apenas para uso pessoal e não comercial. Isso é uma concessão de licença, não uma transferência de título, e sob esta licença você não pode:`,
  "legal.terms.topic2.list1": "modificar ou copiar os materiais;",
  "legal.terms.topic2.list2":
    "usar os materiais para qualquer finalidade comercial ou para exibição pública;",
  "legal.terms.topic2.list3": `tentar engenharia reversa de qualquer software contido no site ${siteConfig.name};`,
  "legal.terms.topic2.list4":
    "remover quaisquer notações de direitos autorais ou outras notações proprietárias dos materiais; ou",
  "legal.terms.topic2.list5":
    'transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.',
  "legal.terms.topic2.content2": `Esta licença será automaticamente encerrada se você violar alguma dessas restrições e poderá ser encerrada por ${siteConfig.name} ou qualquer uma de suas empresas afiliadas a qualquer momento. Ao encerrar a visualização desses materiais ou ao encerrar esta licença, você deve destruir quaisquer materiais baixados em sua posse, seja em formato eletrônico ou impresso.`,
  "legal.terms.topic3.title": "3. Isenção de Responsabilidade",
  "legal.terms.topic3.content": `Todos os materiais no site ${siteConfig.name} são fornecidos "como estão". ${siteConfig.name} não oferece garantias, expressas ou implícitas, e, portanto, nega todas as outras garantias. Além disso, ${siteConfig.name} não faz representações sobre a precisão ou confiabilidade do uso dos materiais em seu site ou de outra forma relacionados a tais materiais ou a qualquer site vinculado a este site.`,
  "legal.terms.topic4.title": "4. Limitações",
  "legal.terms.topic4.content": `${siteConfig.name} ou seus fornecedores não serão responsáveis por quaisquer danos que possam surgir com o uso ou incapacidade de usar os materiais no site ${siteConfig.name}, mesmo que ${siteConfig.name} ou um representante autorizado deste site tenha sido notificado, oralmente ou por escrito, da possibilidade de tais danos. Algumas jurisdições não permitem limitações em garantias implícitas ou limitações de responsabilidade por danos incidentais, essas limitações podem não se aplicar a você.`,
  "legal.terms.topic5.title": "5. Revisões e Correções",
  "legal.terms.topic5.content": `Os materiais que aparecem no site ${siteConfig.name} podem incluir erros técnicos, tipográficos ou fotográficos. ${siteConfig.name} não promete que qualquer um dos materiais neste site seja preciso, completo ou atualizado. ${siteConfig.name} pode alterar os materiais contidos em seu site a qualquer momento, sem aviso prévio. ${siteConfig.name} não se compromete a atualizar os materiais.`,
  "legal.terms.topic6.title": "6. Links",
  "legal.terms.topic6.content": `${siteConfig.name} não revisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A presença de qualquer link não implica em endosso por parte do ${siteConfig.name} do site. O uso de qualquer site vinculado é por conta e risco do usuário.`,
  "legal.terms.topic7.title": "7. Modificações nos Termos de Uso do Site",
  "legal.terms.topic7.content": `${siteConfig.name} pode revisar estes Termos de Uso para seu site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes Termos e Condições de Uso.`,
  "legal.terms.topic8.title": "8. Sua Privacidade",
  "legal.terms.topic8.content":
    "Por favor, leia nossa Política de Privacidade.",
  "legal.terms.topic9.title": "9. Lei Aplicável",
  "legal.terms.topic9.content": `Qualquer reivindicação relacionada ao site ${siteConfig.name} será regida pelas leis dos EUA, sem considerar suas disposições de conflito de leis.`,

  "legal.privacy.title": `Política de Privacidade para ${siteConfig.name}`,
  "legal.privacy.paragraph1": `${siteConfig.name} ("nós", "nos" ou "nosso") fornece esta Política de Privacidade para informá-lo sobre nossas políticas e procedimentos em relação à coleta, uso e divulgação de informações pessoais que podemos receber de usuários de nosso site ("Site"), acessível em ${BASE_URL_WITHOUT_PROTOCOL}, e quaisquer outros serviços oferecidos por nós em conexão com nosso site (todos os itens acima referidos como os "Serviços").`,
  "legal.privacy.paragraph2":
    "Se você tiver perguntas adicionais ou precisar de mais informações sobre nossa Política de Privacidade, não hesite em nos contatar em",
  "legal.privacy.paragraph3": `Esta Política de Privacidade se aplica apenas às nossas atividades online e é válida para visitantes do nosso site no que diz respeito às informações que eles compartilham e/ou coletam por ${siteConfig.name}. Esta política não se aplica a nenhuma informação coletada offline ou por meio de canais diferentes deste site.`,
  "legal.privacy.topic1.title": "Consentimento",
  "legal.privacy.topic1.content": `Ao usar nosso site, você consente com nossa Política de Privacidade e concorda com seus termos.`,
  "legal.privacy.topic2.title": "Informações que coletamos",
  "legal.privacy.topic2.content":
    "No curso do uso dos Serviços, coletamos informações pessoalmente identificáveis, na forma de Identificadores Persistentes, incluindo Endereço IP. Coletamos e armazenamos essas informações pessoais exclusivamente com o objetivo de fornecer suporte para as operações internas de nossos Serviços e de nosso Site.",
  "legal.privacy.topic3.title": "Como usamos suas informações",
  "legal.privacy.topic3.list1": "Fornecer, operar e manter nosso site",
  "legal.privacy.topic3.list2":
    "Comunicar-se com você, diretamente ou por meio de um de nossos parceiros, incluindo atendimento ao cliente, fornecer atualizações e outras informações relacionadas ao site e para fins de marketing e promoção (opt in).",
  "legal.privacy.topic3.list3": "Encontrar e prevenir fraudes",
  "legal.privacy.topic4.title": "Arquivos de Log",
  "legal.privacy.topic4.content": `${siteConfig.name} segue um procedimento padrão de uso de arquivos de log. Esses arquivos registram visitantes quando eles acessam sites. Todas as empresas de hospedagem fazem isso como parte da análise do serviço de hospedagem. As informações coletadas pelos arquivos de log incluem endereços de protocolo de Internet (IP), tipo de navegador, provedor de serviços de Internet (ISP), carimbo de data e hora, páginas de referência/saída e possivelmente o número de cliques. Essas informações não estão vinculadas a nenhuma informação pessoalmente identificável. O propósito das informações é analisar tendências, administrar o site, rastrear o movimento do usuário no site e reunir informações demográficas.`,
  "legal.privacy.topic5.title": "Cookies e Web Beacons",
  "legal.privacy.topic5.content": `Como qualquer outro site, ${siteConfig.name} usa "cookies". Esses cookies são usados para armazenar informações, incluindo preferências dos visitantes, e as páginas no site que o visitante acessou ou visitou. As informações são usadas para otimizar a experiência do usuário, personalizando o conteúdo de nossa página da web com base no tipo de navegador do visitante e/ou outras informações.`,
  "legal.privacy.topic6.title":
    "Políticas de Privacidade de Parceiros de Publicidade",
  "legal.privacy.topic6.content": `Você pode consultar esta lista para encontrar a Política de Privacidade de cada um dos parceiros de publicidade do ${siteConfig.name}.`,
  "legal.privacy.topic6.content2": `Servidores de anúncios de terceiros ou redes de anúncios usam tecnologias como cookies, JavaScript ou Web Beacons que são usados em seus respectivos anúncios e links que aparecem no ${siteConfig.name}, os quais são enviados diretamente para o navegador do usuário. Eles automaticamente recebem seu endereço IP quando isso ocorre. Essas tecnologias são usadas para medir a eficácia de suas campanhas publicitárias e/ou personalizar o conteúdo publicitário que você vê em sites que visita.`,
  "legal.privacy.topic6.content3": `Observe que o ${siteConfig.name} não tem acesso ou controle sobre esses cookies usados por anunciantes de terceiros.`,
  "legal.privacy.topic7.title": "Políticas de Privacidade de Terceiros",
  "legal.privacy.topic7.content": `A Política de Privacidade do ${siteConfig.name} não se aplica a outros anunciantes ou sites. Portanto, recomendamos que você consulte as respectivas Políticas de Privacidade desses servidores de anúncios de terceiros para obter informações mais detalhadas. Pode incluir práticas deles e instruções sobre como optar por determinadas opções.`,
  "legal.privacy.topic7.content2":
    "Você pode optar por desativar os cookies por meio das opções individuais do seu navegador. Para obter informações mais detalhadas sobre o gerenciamento de cookies com navegadores da web específicos, consulte os sites respectivos dos navegadores.",
  "legal.privacy.topic8.title": "Links para Outros Sites",
  "legal.privacy.topic8.content":
    "Nossos serviços podem conter links para outros sites, aplicativos e serviços online. Se você optar por visitar um serviço de terceiros ou clicar em outro link de terceiros, será direcionado para o site, aplicativo ou serviço de terceiros. O fato de vincular a um site, conteúdo não é um endosso, autorização ou representação de nossa afiliação com esse terceiro, nem é um endosso de suas políticas ou práticas de privacidade ou segurança da informação. Não exercemos controle sobre sites ou serviços de terceiros.",
  "legal.privacy.topic9.title":
    "Direitos de Privacidade do CCPA (Não Venda Minhas Informações Pessoais)",
  "legal.privacy.topic9.content":
    "De acordo com o CCPA, entre outros direitos, os consumidores da Califórnia têm o direito de:",
  "legal.privacy.topic9.list1":
    "Solicitar que um negócio que coleta dados pessoais de um consumidor divulgue as categorias e peças específicas de dados pessoais que o negócio coletou sobre os consumidores.",
  "legal.privacy.topic9.list2":
    "Solicitar que um negócio exclua qualquer dado pessoal sobre o consumidor que o negócio tenha coletado.",
  "legal.privacy.topic9.list3":
    "Solicitar que um negócio que vende dados pessoais de um consumidor não venda os dados pessoais do consumidor.",
  "legal.privacy.topic9.content2":
    "Se você fizer uma solicitação, temos um mês para responder. Se você deseja exercer qualquer um desses direitos, entre em contato conosco em",
  "legal.privacy.topic10.title": "Compartilhamento de Informações",
  "legal.privacy.topic10.content":
    "NÃO COMPARTILHAREMOS, VENDEREMOS, ALUGAREMOS OU NEGOCIAREMOS SUAS INFORMAÇÕES PESSOAIS COM OUTRAS PARTES, EXCETO CONFORME FORNECIDO ABAIXO:",
  "legal.privacy.topic10.content2":
    "Informações Pessoais: Podemos compartilhar informações pessoais, incluindo o Endereço IP, com o objetivo de fornecer suporte para as operações internas de nossos serviços e de nosso site.",
  "legal.privacy.topic10.content3":
    '"Suporte para as operações internas de nossos Serviços e de nosso Site" significa atividades necessárias para manter ou analisar o funcionamento dos serviços ou do site; realizar comunicações de rede; autenticar usuários ou personalizar conteúdo; garantir conformidade legal ou regulatória; ou realizar outras análises de uso. Através de nossos serviços e site, nenhuma outra informação pessoal é coletada e os identificadores persistentes não são usados ou divulgados para contatar um indivíduo específico.',
  "legal.privacy.topic11.title": "Transferência Internacional",
  "legal.privacy.topic11.content":
    "Suas informações podem ser transferidas para - e mantidas em - computadores localizados fora do seu estado, província, país ou outra jurisdição governamental, onde as leis de privacidade podem não ser tão protetoras quanto aquelas em sua jurisdição. Se você estiver localizado fora dos Estados Unidos e optar por fornecer informações para nós, podemos transferir as informações pessoais para os Estados Unidos e processá-las lá. O uso de nossos serviços ou site representa seu consentimento a esta Política de Privacidade e seu acordo com essa transferência.",
  "legal.privacy.topic12.title": "Direitos de Proteção de Dados GDPR",
  "legal.privacy.topic12.content":
    "Gostaríamos de garantir que você esteja totalmente ciente de todos os seus direitos de proteção de dados. Todo usuário tem direito ao seguinte:",
  "legal.privacy.topic12.list1":
    "O direito de acessar - Você tem o direito de solicitar cópias de seus dados pessoais. Podemos cobrar uma pequena taxa por este serviço.",
  "legal.privacy.topic12.list2":
    "O direito de retificação - Você tem o direito de solicitar que corrijamos qualquer informação que você acredita estar imprecisa. Você também tem o direito de solicitar que completemos as informações que você acredita estar incompletas.",
  "legal.privacy.topic12.list3":
    "O direito ao apagamento - Você tem o direito de solicitar que apaguemos seus dados pessoais, sob certas condições.",
  "legal.privacy.topic12.list4":
    "O direito de restringir o processamento - Você tem o direito de solicitar que restrinjamos o processamento de seus dados pessoais, sob certas condições.",
  "legal.privacy.topic12.list5":
    "O direito de se opor ao processamento - Você tem o direito de se opor ao nosso processamento de seus dados pessoais, sob certas condições.",
  "legal.privacy.topic12.list6":
    "O direito à portabilidade de dados - Você tem o direito de solicitar que transfiramos os dados que coletamos para outra organização, ou diretamente para você, sob certas condições.",
  "legal.privacy.topic12.content2":
    "Se você fizer uma solicitação, temos um mês para responder. Se você deseja exercer qualquer um desses direitos, entre em contato conosco em",
  "legal.privacy.topic13.title": "Informações para Crianças",
  "legal.privacy.topic13.content":
    "Outra parte de nossa prioridade é adicionar proteção para crianças enquanto usam a internet. Incentivamos os pais e responsáveis a observar, participar e/ou monitorar e orientar a atividade online deles.",
  "legal.privacy.topic13.content2": `${siteConfig.name} não coleta conscientemente nenhuma Informação Pessoal Identificável de crianças com menos de 13 anos. Se você acredita que seu filho forneceu esse tipo de informação em nosso site, recomendamos que entre em contato conosco imediatamente e faremos o possível para remover rapidamente tais informações de nossos registros.`,
  "legal.privacy.topic14.title": "Alterações a Esta Política de Privacidade",
  "legal.privacy.topic14.content":
    "Esta Política de Privacidade pode ser revisada periodicamente, e isso será refletido por uma data de 'Última modificação' abaixo. Portanto, aconselhamos que você revise esta página periodicamente para quaisquer alterações. Notificaremos você de quaisquer alterações postando a nova Política de Privacidade nesta página. Essas mudanças são efetivas imediatamente, após serem postadas nesta página.",
  "legal.privacy.topic15.title": "Informações de Contato",
  "legal.privacy.topic15.content":
    "Entre em contato conosco com quaisquer perguntas ou comentários sobre esta Política de Privacidade, Nossa Política de Privacidade para Crianças, suas informações pessoais e nossas práticas de divulgação de terceiros, em",
  "legal.privacy.lastModified": "Última modificação:",
} as const;
