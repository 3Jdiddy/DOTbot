import type { NextApiRequest, NextApiResponse } from "next";
import {Configuration, OpenAIApi} from 'openai';

type ResponseData = {
    text: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
    body: {
        prompt: string;
    };
}

const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);

export default async function handler(
    req: GenerateNextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const prompt = req.body.prompt;

    if (!prompt || prompt === ''){
        return new Response('Please send your promt', {status: 400});
    }

    const aiResult = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${prompt}`,
        temperature: 0.9,
        max_tokens: 2048,
        frequency_penalty: 0.5,
        presence_penalty: 0
    });

    const response = aiResult.data.choices[0].text?.trim() || 'Sorry, there was a problem!';
    res.status(200).json({text: response});
}