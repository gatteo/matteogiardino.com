import * as React from 'react'

import { FAQ } from '@/components/marketing/FAQ'

const FAQList = [
    {
        question: 'Quali prerequisiti sono necessari per iscriversi al corso?',
        answer: 'Nessun prerequisito è richiesto. Il corso è progettato sia per principianti assoluti che per coloro che hanno una leggera familiarità con la programmazione.',
    },
    {
        question: 'Cosa mi serve per seguire le lezioni?',
        answer: 'Una connessione a internet. Basta. Io ti consiglio di seguire dal computer cosi potrai scrivere i codici e completare gli esercizi man mano, ma nulla ti vieta di guardare i video dal tuo smartphone o dal tablet.',
    },
    {
        question: 'Ho già delle basi, il corso mi servirà?',
        answer: "Meglio così! Non solo questo percorso ti permetterà di consolidare le tue conoscenze, ma imparerai molte altre nozioni sul mondo lavorativo che di solito non insegnano all'università o a scuola.",
    },
    {
        question: 'Serve la laurea o un diploma per frequentare?',
        answer: "Assolutamente no, non servono conoscenze pregresse per poter frequentare il corso. L'unica cosa che ti chiedo è di essere motivato.",
    },
    {
        question: "Quanto dura l'accesso al corso?",
        answer: "L'accesso al corso è a vita, non scadrà mai. Quindi potrai seguire le lezioni al tuo passo e senza fretta. In più mensilmente ci saranno aggiornamenti e aggiunte al corso: questi aggiornamenti sono gratuiti per gli iscritti al corso.",
    },
    {
        question: 'Devo seguire il corso in un determinato periodo o posso accedervi quando voglio?',
        answer: 'Puoi accedere al corso in qualsiasi momento. Una volta iscritto, avrai accesso 24/7 alle lezioni e ai materiali.',
    },
    {
        question: 'Quanto tempo è necessario per completare il corso?',
        answer: 'La durata varia in base al tuo ritmo di apprendimento. Alcuni studenti possono completarlo in pochi giorni, mentre altri preferiscono un percorso più graduale.',
    },
    {
        question: 'Riceverò un certificato alla fine del corso?',
        answer: 'Sì, al termine del corso riceverai un certificato di completamento che attesta le tue competenze acquisite.',
    },
    {
        question: 'I posti sono limitati?',
        answer: 'I posti disponibili per Programmatore Leggendario sono 50. Sono circa il doppio rispetto alle precedenti edizioni, che avevano solo 25 posti disponibili. Nonostante il notevole aumento, i posti sono comunque limitati e vanno via rapidamente, quindi affrettati!',
    },
    {
        question: 'Cosa succede quando pago?',
        answer: 'Quando paghi riceverai una conferma di pagamento e ulteriori informazioni sulle modalità di accesso al corso. È importante seguire le istruzioni fornite dopo il pagamento per assicurarsi di ottenere tutti i benefici offerti dal corso.',
    },
]

export function FAQs() {
    return (
        <section id='faq' className='my-24 flex flex-col gap-12 lg:flex-row'>
            <div className='text-center lg:w-5/12 lg:text-left'>
                <h2 className='text-2xl font-bold text-neutral-800 dark:text-white md:text-3xl lg:text-4xl'>
                    Domande frequenti
                </h2>
                <p className='mt-4 text-neutral-600 dark:text-neutral-300'>
                    Trova le risposte alle domande comuni che mi vengono poste.
                </p>
            </div>
            <div className='divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800 lg:w-7/12'>
                {FAQList.map((faq, i) => (
                    <FAQ key={faq.question} question={faq.question} answer={faq.answer} index={i} />
                ))}
            </div>
        </section>
    )
}
