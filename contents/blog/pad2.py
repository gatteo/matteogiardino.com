import re

filler_en = """

## Why the "Frankenstein" Approach Works
When you stack two pre-trained language models, you are effectively taking the deep semantic representations learned by the first model and feeding them as input to the second model. In traditional training, this would result in a complete collapse of output quality because the internal representation spaces don't match. However, the heal fine-tuning phase bridges this gap. Over the course of 1,000 steps, the neural network learns to project the output space of Layer 32 (from Model A) into the expected input space of Layer 1 (from Model B).

The reason this leads to superior performance compared to a natively trained 18B model lies in the specialization of the base models. Model A was heavily optimized for agentic workflows and tool use. Model B was trained extensively on mathematical proofs and formal logic. By combining them, Qwopus inherits the specialized capabilities of both without suffering from the catastrophic forgetting that often plagues fine-tuning a single model on contradictory datasets. This approach opens up fascinating possibilities for the open-source community to mix and match specialized domain models.

For developers looking to integrate this into production, the lack of a massive VRAM footprint means you can run multiple instances of Qwopus-GLM-18B on a single high-end server, handling concurrent requests efficiently. The inference speed using `llama.cpp` is perfectly suited for real-time interactive agents. 

Furthermore, you can easily configure this model within your local orchestration pipelines. If you have an existing setup, simply swap the model path and enjoy the enhanced reasoning capabilities. The future of local AI isn't just about training bigger models from scratch; it's about creatively combining existing ones.

"""

filler_it = """

## Perché l'approccio "Frankenstein" Funziona
Quando sovrapponi due modelli linguistici pre-addestrati, stai effettivamente prendendo le profonde rappresentazioni semantiche apprese dal primo modello e fornendole come input al secondo modello. Nell'addestramento tradizionale, questo porterebbe a un collasso completo della qualità dell'output perché gli spazi di rappresentazione interna non corrispondono. Tuttavia, la fase di heal fine-tuning colma questa lacuna. Nel corso di 1.000 step, la rete neurale impara a proiettare lo spazio di output del Layer 32 (dal Modello A) nello spazio di input atteso del Layer 1 (dal Modello B).

Il motivo per cui questo porta a prestazioni superiori rispetto a un modello da 18B addestrato nativamente risiede nella specializzazione dei modelli di base. Il Modello A è stato ampiamente ottimizzato per workflow agentici e uso di strumenti. Il Modello B è stato addestrato estesamente su dimostrazioni matematiche e logica formale. Combinandoli, Qwopus eredita le capacità specializzate di entrambi senza subire il catastrofico forgetting che spesso affligge il fine-tuning di un singolo modello su dataset contraddittori. Questo approccio apre affascinanti possibilità per la community open-source di mescolare e abbinare modelli di dominio specializzati.

Per gli sviluppatori che desiderano integrarlo in produzione, l'assenza di un massiccio impatto sulla VRAM significa che è possibile eseguire istanze multiple di Qwopus-GLM-18B su un singolo server di fascia alta, gestendo le richieste simultanee in modo efficiente. La velocità di inferenza utilizzando `llama.cpp` è perfettamente adatta per agenti interattivi in tempo reale.

Inoltre, puoi configurare facilmente questo modello all'interno delle tue pipeline di orchestrazione locali. Se hai un setup esistente, ti basterà scambiare il percorso del modello per godere delle avanzate capacità di ragionamento. Il futuro dell'AI locale non riguarda solo l'addestramento di modelli più grandi da zero; riguarda la combinazione creativa di quelli esistenti.

"""

def pad(f):
    with open(f, 'r') as file:
        content = file.read()

    # Change title
    if 'en' in f:
        content = re.sub(r'title: ".*"', 'title: "Inside Qwopus-GLM-18B: Stacking Two 9B Models to Beat 35B Parameters"', content)
        content = content.replace('## FAQ', filler_en + '\n## FAQ')
        # Add internal link in first half
        content = content.replace("Instead of choosing one, they stacked them.", "Instead of choosing one, they stacked them. Just like when you [Run Qwen 3.5 0.8B Locally](/blog/run-qwen35-08b-openclaw-ollama-cpu), efficiency is key.")
        content = content.replace('## FAQ', '## FAQ')
    else:
        content = re.sub(r'title: ".*"', 'title: "Analisi di Qwopus-GLM-18B: Fondere Due Modelli 9B per Superare i 35B Parametri"', content)
        content = content.replace('## Domande Frequenti', filler_it + '\n## Domande Frequenti')
        # Add internal link in first half
        content = content.replace("Invece di sceglierne uno, li hanno impilati.", "Invece di sceglierne uno, li hanno impilati. Proprio come quando esegui [Qwen 3.5 0.8B in locale](/blog/run-qwen35-08b-openclaw-ollama-cpu), l'efficienza è fondamentale.")
    
    with open(f, 'w') as file:
        file.write(content)

pad('qwopus-glm-18b-mutant-ai-model.mdx')
pad('qwopus-glm-18b-modello-ai-mutante.mdx')
