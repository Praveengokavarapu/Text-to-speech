import { useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'
import {AiFillSound} from 'react-icons/ai'
import './index.css';


import axios from 'axios';

function Main() {

  const [url, setUrl] = useState("");
  const [inputText, setInputText] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handlePress = async () => {

    setLoading(true)
    const encodedParams = new URLSearchParams();
    encodedParams.set('voice_code', 'en-US-1');
    encodedParams.set('text', inputText);
    encodedParams.set('speed', '1.00');
    encodedParams.set('pitch', '1.00');
    encodedParams.set('output_type', 'audio_url');

    const options = {
      method: 'POST',
      url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '35de308737msh682d1e72ce44b16p1a2fb1jsnc0ce16c0f578',
        'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setLoading(false)
      console.log(response.data.result.audio_url);
      setUrl(response.data.result.audio_url)
      setInputText('',inputText)
    } catch (error) {
      console.error(error);
      setInputText('',inputText)
    }

  }

  return (
    <section className='main'>
      <h1>Convert Text To Audio</h1>
      <div className="hero__form">
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" placeholder="Try typing.. SOS 42" />
        <button onClick={handlePress}><AiFillSound className='icon'/></button>
      </div>
      
      {isLoading ?
        <div className="loader-container" data-testid="loader">
      <MutatingDots 
  height="100"
  width="100"
  color="black"
  secondaryColor= 'white'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
      </div>:
        <a className='hero__url' target="_blank" rel="noreferrer" href={url}>{url.trim() === "" ? "" : "Click Here To Listen"}</a>}
    </section >
  )
}

export default Main