import * as React from 'react'

import { FAQ } from '@/components/marketing/FAQ'

const FAQList = [
    {
        question: 'Tech Career Launch  è un corso di programmazione?',
        answer: 'No, Tech Career Launch non è un corso di programmazione. È un percorso di mentorship personalizzato per studenti di informatica e aspiranti programmatori che desiderano avviare la propria carriera nel settore tech. Il percorso fornisce mentoring 1-1 con un mentore esperto, Matteo Giardino, che offre consigli pratici, orientamento strategico e supporto personalizzato per sviluppare le competenze richieste, creare un curriculum accattivante e affrontare i colloqui di lavoro con sicurezza.',
    },
    {
        question: 'Quali sono i requisiti per partecipare al percorso di mentorship?',
        answer: "L’unico requisito di Tech Career Launch è che devi saper già programmare. È pensato per studenti di informatica e aspiranti programmatori che desiderano avviare la propria carriera nel settore tech. Se sei interessato a ottenere supporto personalizzato per ottenere il tuo primo lavoro nel campo della tecnologia e desideri beneficiare dell'esperienza e delle competenze di un mentore esperto, il percorso può essere adatto a te. Se stai cercando un corso di programmazione, ti consiglio vivamente Programmatore Leggendario",
    },
    {
        question: 'Quanti posti ci sono disponibili?',
        answer: 'I posti disponibili per il percorso di mentorship Tech Career Launch sono 50. Sono circa il doppio rispetto alla prima edizione, che aveva solo 25 posti disponibili. Nonostante il notevole aumento, i posti sono comunque limitati e vanno via rapidamente, quindi affrettati!',
    },
    {
        question: 'Cosa significa mentoring 1-1?',
        answer: 'Il percorso fornisce sessioni di dialogo individuali con il mentore, Matteo Giardino. Questo tipo di mentoring si svolge in un contesto one-on-one, in cui il mentore lavora direttamente con il partecipante, offrendo supporto personalizzato, consigli e orientamento basati sulle esigenze specifiche del partecipante.',
    },
    {
        question: 'Quanto durano delle sessioni di mentoring?',
        answer: "La durata delle sessioni di mentoring può variare a seconda delle preferenze del partecipante e delle necessità specifiche. Di solito, una sessione di mentoring può durare da 30 minuti a un'ora.",
    },
    {
        question: 'Quali sono i benefici di partecipare a Tech Career Launch?',
        answer: 'Partecipando a Tech Career Launch, avrai accesso a mentoring personalizzato, consigli pratici, orientamento strategico, risorse per lo sviluppo delle competenze, preparazione per i colloqui di lavoro e opportunità di networking professionale.',
    },
    {
        question: 'Come avvengono le sessioni di mentoring?',
        answer: 'Le sessioni di mentoring possono svolgersi online o di persona, a seconda delle preferenze del partecipante e del mentore. Se le sessioni si svolgono online, di solito avvengono tramite videochiamate o piattaforme di comunicazione online.',
    },
    {
        question: 'Cosa succede quando pago?',
        answer: 'Quando paghi per il percorso di mentorship Tech Career Launch, riceverai una conferma di pagamento e ulteriori informazioni sulle modalità di accesso alle sessioni di mentoring. È importante seguire le istruzioni fornite dopo il pagamento per assicurarsi di ottenere tutti i benefici offerti dal percorso di mentorship.',
    },
    {
        question: 'Quali competenze posso sviluppare durante il percorso di mentorship?',
        answer: 'Durante il percorso di mentorship, potrai sviluppare competenze tecniche nel campo della programmazione, migliorare le tue abilità di presentazione e comunicazione, acquisire conoscenze sulle dinamiche del mondo del lavoro e altro ancora.',
    },
    {
        question: 'Cosa succede dopo aver completato il percorso di mentorship?',
        answer: "Dopo aver completato il percorso di mentorship Tech Career Launch, avrai acquisito competenze e conoscenze che ti aiuteranno ad avviare la tua carriera nel settore tech. Sarai in grado di utilizzare le informazioni, i consigli e le strategie apprese durante il percorso per affrontare con maggiore sicurezza il processo di ricerca del lavoro e sviluppare ulteriormente le tue competenze nel tempo. Inoltre, avrai avuto l'opportunità di connetterti con professionisti influenti nel settore tech, aprendo le porte a potenziali opportunità di lavoro e collaborazioni future.",
    },
]

export function FAQs() {
    return (
        <section id='faq' className='my-24 flex flex-col gap-12 lg:flex-row'>
            <div className='text-center lg:w-5/12 lg:text-left'>
                <h2 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl'>
                    Domande frequenti
                </h2>
                <p className='mt-4 text-gray-600 dark:text-gray-300'>
                    Trova le risposte alle domande comuni che mi vengono poste.
                </p>
            </div>
            <div className='divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12'>
                {FAQList.map((faq, i) => (
                    <FAQ key={faq.question} question={faq.question} answer={faq.answer} index={i} />
                ))}
            </div>
        </section>
    )
}
