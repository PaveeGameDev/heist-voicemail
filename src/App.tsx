import './App.css';
import {useState} from "react";
function App() {
    const [voicemail, setVoicemail] = useState<string>('');


    const styles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column', // Should use specific string values like 'column' or 'row'
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#ffd700',
        fontFamily: "'Courier New', Courier, monospace",
        textAlign: 'center',
        padding: '20px',
    };

    const inputStyle: React.CSSProperties = {
        padding: '10px',
        fontSize: '16px',
        border: '2px solid #ffd700',
        borderRadius: '5px',
        backgroundColor: '#333',
        color: '#ffd700',
        outline: 'none',
        textAlign: 'center',
    };

    return (
        <div style={styles}>
            <h1>HEIST Voicemail checker</h1>
            <div>
                <h2>Enter the voicemail you would like to access</h2>
                <input
                    type="text"
                    placeholder="Type your answer"
                    onChange={(input) => setVoicemail(input.target.value)}
                    style={inputStyle}
                />
            </div>
            {!voicemail ? '' : voicemail.toLowerCase().includes('1-222-666') ? (
                <div>
                    <h2>This is your voicemail</h2>
                    <audio controls>
                        <source src="normal.mp3" type="audio/mp3"/>
                        Your browser does not support the audio tag, please contact support.
                    </audio>
                    <audio controls>
                        <source src="suspense.mp3" type="audio/mp3"/>
                        Your browser does not support the audio tag, please contact support.
                    </audio>
                </div>
            ) : <div>There is no voicemail with this number</div>}
        </div>
    );
}

export default App;