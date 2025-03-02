import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { segment, mpartice, lytics, zeotap} from './reference';

const Main = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [aiContent, setAIContent] = useState('');

    const fetchAIContent = async () => {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "How do I set up a new source in Segment?";
        
        let ans = "";
        let temp = await model.generateContent(prompt + "use as reference : " + segment);;
        ans += temp.response.text();
        temp = await model.generateContent(prompt + "use as reference : " + mpartice);
        ans += temp.response.text();
        temp = await model.generateContent(prompt + "use as reference : " + lytics);
        ans += temp.response.text();        
        temp = await model.generateContent(prompt + "use as reference : " + zeotap);
        ans += temp.response.text();  

        const result = await model.generateContent("refine the ans remove unnecssary details and format it for <p></p>: " + ans);

        document.querySelector('.resultOutput').innerHTML = result.response.text();
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={fetchAIContent}>Fetch AI Content</button>
            <div className='resultOutput'></div>
        </div>
    );
}

export default Main;