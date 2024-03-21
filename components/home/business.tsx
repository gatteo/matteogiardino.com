import { UtmMediums } from '@/types/links'
import { CtaBusiness } from '@/components/cta-business'

export function Business() {
    return (
        <>
            <section id='business' className='mt-32'>
                <div className='mx-auto max-w-7xl pb-8 lg:px-8'>
                    <div className='max-w-2xl lg:mx-auto lg:text-center'>
                        <h2 className='text-base font-semibold leading-7 text-sky-400'>servizi per le aziende</h2>
                        <p className='tracking-tigh mt-2 text-3xl font-bold sm:text-4xl'>
                            aiuto aziende e brillanti imprenditori a sbloccare il loro{' '}
                            <strong className='underline decoration-sky-400 underline-offset-4'>potenziale</strong> con
                            la <strong className='underline decoration-sky-400 underline-offset-4'>tecnologia</strong>
                        </p>
                        <p className='mt-6 text-lg leading-8 text-muted-foreground dark:text-gray-300'>
                            ho avuto la fortuna di conoscere grandi persone con grandi idee. A tutte però mancava una
                            cosa: la conoscenza tecnologica necessaria per sbloccare il pieno potenziale. Voglio dare la
                            direzione necessaria per aiutare un imprenditore a raggiungere qualsiasi tipo di successo.
                        </p>
                    </div>
                </div>
            </section>

            <CtaBusiness medium={UtmMediums.Homepage} />
        </>
    )
}
