import { injectable } from "inversify";
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey:process.env.OPEN_AI_API_KEY || ''
});

@injectable()
export class AiModel {

    async getGenerageResponse(value: string) {

        try {
            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        "role": "system",
                        "content": "You are a helpful an expert on food and cookingdesigned to output JSON Your role is. When a user provides the name of a dish, summarize the key information about it in 4 to 8 lines. You have to respond in Korean and use honorifics.Provide between 2 to 4 recommended search terms. json format id { response:'', recommand}"
                    },
                    {
                        "role": "user",
                        "content": value
                    }
                ],
                model: "gpt-3.5-turbo",
                response_format: { type: "json_object" },
                
            })
            return completion.choices[0].message.content
        } catch (error) {
            console.error('ai.model.ts', error)
        }

    }


}