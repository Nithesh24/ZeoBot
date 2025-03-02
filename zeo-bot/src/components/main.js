import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { segment, mpartice, lytics, zeotap } from './reference';

// Change the import statement for the logo
import logo from './assets/logo.png';

// Import the main.css file
import './main.css';

const Main = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [aiContent, setAIContent] = useState('');
    const [responseContent, setResponseContent] = useState('');

    const scrollToBottom = () => {
        const bodyDiv = document.querySelector('.body');
        bodyDiv.scrollTop = bodyDiv.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [responseContent]);

    const addPromptInBody = (prompt) => {
        const bodyDiv = document.querySelector('.body');
        const promptDiv = document.createElement('div');
        const promptP = document.createElement('p');
        promptP.textContent = prompt;
        promptDiv.appendChild(promptP);
        bodyDiv.prepend(promptDiv); // Change to prepend to add at the top
        scrollToBottom();
    };

    const addResponseInBody = (response) => {
        const bodyDiv = document.querySelector('.body');
        const lastDiv = bodyDiv.firstChild; // Change to firstChild
        if (lastDiv) {
            bodyDiv.removeChild(lastDiv);
        }
        const responseDiv = document.createElement('div');
        const responseP = document.createElement('p');
        responseP.innerHTML = response;
        responseDiv.appendChild(responseP);
        bodyDiv.prepend(responseDiv); // Change to prepend to add at the top
    };

    const fetchAIContent = async () => {
        const bodyDiv = document.querySelector('.body');
        const lastDiv = bodyDiv.firstChild; // Change to firstChild
        if (lastDiv && lastDiv.textContent === "please wait while I generate the response it may take few mins...") {
            alert("Previous prompt answer is being generated, please wait.");
            return;
        }

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = aiContent;
        setAIContent(''); // Clear the input field
        addPromptInBody(prompt);
        addPromptInBody("please wait while I generate the response it may take few mins...");

        let ans = "";
        let temp = await model.generateContent(prompt + " use as reference: " + segment);
        ans += temp.response.text();
        temp = await model.generateContent(prompt + " use as reference: " + mpartice);
        ans += temp.response.text();
        temp = await model.generateContent(prompt + " use as reference: " + lytics);
        ans += temp.response.text();        
        temp = await model.generateContent(prompt + " use as reference: " + zeotap);
        ans += temp.response.text();  

        const result = await model.generateContent("refine the ans remove unnecessary details and format it for <p></p>: " + ans);

        addResponseInBody(result.response.text());
        scrollToBottom();

    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchAIContent();
        }
    };

    return (
        <div className="main-flex">
            <div className="header">
                <img src={logo} alt="ZeoBot Logo" />
                <h1>ZeoBot</h1>
            </div>
            <div className="body">
                {/* <div className='resultOutput' dangerouslySetInnerHTML={{ __html: responseContent }}></div> */}
            </div>
            <div className="footer">
                <div className="chat-input">
                    <input 
                        type="text" 
                        placeholder="Ask how to..." 
                        onChange={(e) => setAIContent(e.target.value)} 
                        value={aiContent} 
                        onKeyPress={handleKeyPress} // Add onKeyPress event
                    />
                    <button onClick={fetchAIContent} className='button'>Ask</button>
                </div>
            </div>
        </div>
    );
}

export default Main;