
import { GoogleGenAI } from "@google/genai";
import { ModelName } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Você é uma Especialista em Cabelos Cacheados e Consultora de Vendas para a marca "Definição Profissional".
Seu objetivo é ajudar as clientes a escolherem o melhor combo de produtos.
Os combos disponíveis são:
1. Combo Definição (4 unidades de 300ml) - R$99 ou 3x de R$39,63.
2. Combo Profissional (12 unidades de 300ml) - R$289 ou 3x de R$102,96 (Mais vendido).
3. Versão Profissional (12 Litros) - R$478,80 ou 4x de R$124,47 (Para salões ou uso intenso).

Destaques do produto: Zero frizz, definição intensa, resultado de salão, não pesa os fios.
Frete para o Nordeste: Fixo R$19,90.
Diferencial: Investimentos acima de R$1.000 permitem que o cliente crie sua PRÓPRIA MARCA (Private Label).

Responda de forma empática, profissional e vendedora. Use emojis.
Mantenha as respostas curtas e diretas.
`;

export async function askSpecialist(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: ModelName.FLASH,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Desculpe, tive um problema ao processar sua dúvida. Pode tentar novamente?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou um pouco ocupada agora cuidando de alguns cachos. Pode me chamar em instantes?";
  }
}
