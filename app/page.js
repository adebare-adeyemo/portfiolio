const projects = [
  {
    name: 'NextaFlow',
    type: 'White-label SaaS / GHL Automation',
    link: 'http://nextaflow.net/',
    summary: 'Built a GoHighLevel white-label SaaS setup with pricing plans, payment links, Paystack integration, AI agents, workflows, calendars, and client sub-account structure.',
    work: [
      'Created SaaS pricing structure for Starter and Growth plans.',
      'Built payment links for $97, $197, $297, and custom Naira-based offers.',
      'Connected Paystack and Paystack EasyPayment for payment collection.',
      'Configured Voice AI agent setup, voice model, LLM model, call type, and testing area.',
      'Built SMS and internal notification workflows for customer replies and lead response.',
      'Managed sub-accounts and white-label CRM setup for client delivery.'
    ],
    tools: ['GoHighLevel', 'SaaS Configurator', 'Paystack', 'Payment Links', 'Voice AI', 'Workflows', 'Sub-accounts'],
    images: [
      ['nextaflow-saas-pricing.jpg', 'SaaS pricing plans'],
      ['nextaflow-workflows.jpg', 'Workflow list'],
      ['nextaflow-a2p-phone.jpg', 'A2P phone setup'],
      ['nextaflow-voice-ai-setup.jpg', 'Voice AI setup'],
      ['nextaflow-ai-dashboard.jpg', 'AI call dashboard'],
      ['nextaflow-payment-integrations.jpg', 'Payment integrations']
    ]
  },
  {
    name: 'Bantech Cybersecurity',
    type: 'Cybersecurity CRM / AI Chatbot',
    link: 'https://bantechcyber.com/',
    summary: 'Set up CRM automation and AI chatbot support for a cybersecurity business to improve lead handling, enquiries, and response speed.',
    work: [
      'Created Conversation AI chatbot for inbound website and live chat enquiries.',
      'Configured supported channels including chat widget and live chat.',
      'Planned CRM-to-website lead routing and customer follow-up process.',
      'Built automation logic for consultation enquiries and prospect management.',
      'Structured chatbot flow for FAQs, lead qualification, and service enquiry support.'
    ],
    tools: ['GoHighLevel', 'Conversation AI', 'Chat Widget', 'Live Chat', 'CRM Automation'],
    images: [['bantech-conversation-ai.jpg', 'Conversation AI agent']]
  },
  {
    name: 'P and B Plumbing Services',
    type: 'Plumbing CRM / Social Planner / Lead System',
    link: 'https://bandpplumbing.com/',
    summary: 'Supported a plumbing service business with GHL CRM, dashboard tracking, social posting, lead follow-up structure, and service marketing setup.',
    work: [
      'Managed dashboard view for opportunity status, pipeline performance, conversion tracking, and stage distribution.',
      'Managed social planner and published service posts across connected channels.',
      'Structured CRM pipeline logic for leads, enquiries, quotes, and follow-ups.',
      'Planned automation for customer reminders, booked jobs, and quote follow-up.',
      'Supported local service lead capture and appointment booking structure.'
    ],
    tools: ['GoHighLevel', 'Dashboard', 'Social Planner', 'CRM Pipelines', 'Automations'],
    images: [['pb-plumbing-dashboard.jpg', 'CRM dashboard'], ['pb-plumbing-social-planner.jpg', 'Social planner']]
  },
  {
    name: 'E-Doubleone Inc',
    type: 'A2P / Phone System / AI Agent',
    link: '',
    summary: 'Configured phone system, A2P verified messaging, AI agent setup, workflows, and CRM communication for a business account.',
    work: [
      'Completed A2P 10DLC compliance setup for SMS messaging.',
      'Managed phone number configuration, forwarding number, call timeout, and default number setup.',
      'Created Voice AI agent with selected voice model, LLM model, and call testing environment.',
      'Built SMS workflow for customer replies and internal notifications.',
      'Managed automation area for customer response and message routing.'
    ],
    tools: ['GoHighLevel', 'A2P 10DLC', 'Phone System', 'Voice AI', 'SMS Workflows', 'CRM'],
    images: [['edoubleone-a2p-phone-system.jpg', 'A2P phone system'], ['edoubleone-sms-workflow.jpg', 'SMS workflow'], ['edoubleone-payment-setup.jpg', 'Payment setup']]
  },
  {
    name: 'Pathfinder',
    type: 'CRM-to-Website Integration / Automation',
    link: 'https://pathfinder311.com/',
    summary: 'Supported website-to-CRM integration, lead capture, chatbot setup, and automation planning for a professional services business.',
    work: [
      'Connected website enquiry flow with CRM follow-up process.',
      'Supported chat options for SMS/Email and Live Chat.',
      'Planned automation for enquiry handling, lead routing, and internal alerts.',
      'Improved lead capture journey from website visit to CRM response.',
      'Aligned front-end website experience with back-end automation.'
    ],
    tools: ['GoHighLevel', 'Website Integration', 'Chat Widget', 'Live Chat', 'CRM', 'Automation'],
    images: [['pathfinder-live-chat.jpg', 'Live website with chat options']]
  },
  {
    name: 'Wealth Achievers',
    type: 'CRM / Funnel / Lead Nurturing',
    link: 'https://wealtheachievers.com/',
    summary: 'Built CRM and funnel support for lead capture, prospect follow-up, appointment booking, and nurture automation for a financial services brand.',
    work: [
      'Structured lead capture and prospect follow-up flow.',
      'Supported funnel and CRM setup for consultation booking.',
      'Built nurture logic for leads and warm prospects.',
      'Improved contact handling and client communication process.',
      'Connected website experience with CRM follow-up journey.'
    ],
    tools: ['GoHighLevel', 'Funnels', 'CRM', 'Lead Nurturing', 'Email Marketing', 'Automation'],
    images: [['wealth-achievers-live-chat.jpg', 'Live website homepage and chat widget']]
  },
  {
    name: 'GOFAMINT Church CRM',
    type: 'Church Automation / Member Nurture',
    link: '',
    summary: 'Built church-focused GHL workflows for prayer requests, Sunday service reminders, new visitor follow-up, new believer nurture, baptism interest, and weekly announcements.',
    work: [
      'Created Church Prayer Request workflow with form trigger, prayer request tag, SMS confirmation, email confirmation, internal team email, wait step, and follow-up message.',
      'Created Sunday Service Reminder Sequence with SMS reminder, email reminder, wait steps, morning SMS, and thank-you SMS.',
      'Built workflow list covering baptism interest, baptism nurture, new believer nurture, new visitor welcome sequence, and weekly announcements.',
      'Organized ministry communication so members and visitors receive timely follow-up.'
    ],
    tools: ['GoHighLevel', 'Church Workflows', 'SMS', 'Email Automation', 'Tags', 'Forms'],
    images: [['gofamint-workflow-list.jpg', 'Workflow list'], ['gofamint-sunday-reminder.jpg', 'Sunday reminder sequence'], ['gofamint-prayer-request.jpg', 'Prayer request workflow']]
  },
  {
    name: 'Barbershop CRM',
    type: 'Local Service Automation / Booking Follow-up',
    link: '',
    summary: 'Built barbershop automation workflows for appointments, reminders, lead nurturing, payment workflow, inactive client re-engagement, and review requests.',
    work: [
      'Created Appointment Confirmation and Reminders workflow.',
      'Published Barbershop Lead Nurture workflow.',
      'Prepared inactive client re-engagement workflow to win back old customers.',
      'Created post-appointment review request workflow.',
      'Structured membership payment workflow and marketing workflow folder.'
    ],
    tools: ['GoHighLevel', 'Appointment Reminders', 'Lead Nurture', 'Review Requests', 'Payments'],
    images: [['barbershop-workflows.jpg', 'Booking and nurture workflows']]
  },
  {
    name: 'AAEF',
    type: 'Event / Investor / Delegate Automation',
    link: '',
    summary: 'Built event and investor-focused automation workflows for delegate nurturing, investor nurturing, email drip campaigns, and marketing workflow organization.',
    work: [
      'Created AAEF Delegate Nurture workflow.',
      'Created AAEF Investor Nurture workflows.',
      'Built delegate email drip campaign workflow.',
      'Organized marketing workflows for event audience follow-up.',
      'Prepared communication structure for delegates, investors, and prospects.'
    ],
    tools: ['GoHighLevel', 'Email Drip Campaign', 'Investor Nurture', 'Delegate Nurture', 'Marketing Workflows'],
    images: [['aaef-workflows.jpg', 'Investor and delegate workflows']]
  }
];

const services = [
  ['GHL Automation', 'Workflows, triggers, tags, custom fields, internal alerts, lead routing, and follow-up systems.'],
  ['A2P Verification', 'Business profile setup, A2P 10DLC compliance, SMS use cases, and phone system configuration.'],
  ['Voice AI & Chatbots', 'Voice AI agents, Conversation AI, chat widgets, lead qualification bots, and booking flows.'],
  ['CRM & Pipelines', 'Sales pipelines, opportunity tracking, calendars, booking systems, and CRM cleanup.'],
  ['Email Marketing', 'Nurture emails, reminders, quote follow-ups, reactivation campaigns, and customer journeys.'],
  ['White-label SaaS', 'Sub-accounts, snapshots, SaaS plans, client onboarding, payment links, and branded CRM delivery.']
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a href="#home" className="brand">Adebare Adeyemo</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="eyebrow">GoHighLevel Expert · CRM Automation · AI Agents · White-label SaaS</p>
          <h1>I build clean GHL systems that capture leads, follow up, book calls, and manage clients.</h1>
          <p className="lead">My work covers GoHighLevel CRM setup, A2P verification, Voice AI, Conversation AI, chatbots, pipelines, email marketing, websites, funnels, payment links, SaaS plans, and white-label agency systems.</p>
          <div className="heroActions">
            <a className="primaryBtn" href="mailto:adebareadeyemowork@gmail.com">Email Me</a>
            <a className="secondaryBtn" href="tel:+2348147050114">+234 814 705 0114</a>
          </div>
        </div>
        <div className="heroCard">
          <p className="cardLabel">Core Focus</p>
          <ul>
            <li>CRM setup and pipeline development</li>
            <li>Workflow automation and lead nurture</li>
            <li>A2P, phone system, SMS and email setup</li>
            <li>Voice AI, Conversation AI and chatbot setup</li>
            <li>White-label SaaS and client sub-accounts</li>
          </ul>
        </div>
      </section>

      <section id="about" className="section twoCol">
        <div>
          <p className="eyebrow">About</p>
          <h2>No noise. Just systems that work.</h2>
        </div>
        <p className="bodyText">I help businesses set up GoHighLevel properly: leads come in, the CRM captures them, workflows follow up, calendars book appointments, AI agents support communication, and pipelines keep everything organized. I work with service businesses, agencies, cybersecurity brands, financial service brands, churches, barbershops, plumbing companies, and event/investor teams.</p>
      </section>

      <section id="skills" className="section muted">
        <div className="sectionIntro">
          <p className="eyebrow">Services</p>
          <h2>What I build</h2>
        </div>
        <div className="serviceGrid">
          {services.map(([title, text]) => (
            <article className="serviceCard" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="sectionIntro">
          <p className="eyebrow">Selected Work</p>
          <h2>Project proof</h2>
          <p className="bodyText smallMax">Each project shows what I did, tools used, live links where available, and screenshot proof from the actual builds.</p>
        </div>

        <div className="projectList">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div className="projectTop">
                <div>
                  <p className="projectType">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                {project.link && (
                  <a className="liveLink" href={project.link} target="_blank" rel="noreferrer">Live Link</a>
                )}
              </div>

              <div className="projectDetails">
                <div>
                  <h4>What I did</h4>
                  <ul className="workList">
                    {project.work.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h4>Tools used</h4>
                  <div className="tags">
                    {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                </div>
              </div>

              <div className="screenshots">
                {project.images.map(([img, label]) => (
                  <a className="shot" href={`/proof/${img}`} target="_blank" rel="noreferrer" key={img}>
                    <img src={`/proof/${img}`} alt={`${project.name} - ${label}`} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contactBox">
        <p className="eyebrow">Contact</p>
        <h2>Need a GoHighLevel system that works?</h2>
        <p>I can set up your CRM, automations, pipelines, A2P, AI agents, chatbot, calendars, funnels, payment links, and white-label SaaS structure.</p>
        <div className="heroActions">
          <a className="primaryBtn" href="mailto:adebareadeyemowork@gmail.com">adebareadeyemowork@gmail.com</a>
          <a className="secondaryBtn" href="tel:+2348147050114">Call / WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
