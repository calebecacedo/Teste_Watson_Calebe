const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const Post = require('./models/Post')
const comentario = Post.findAll()

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: 'rvVcyAu_18mo9p0fV4-aPLIqJ7E7HNZiERnC-mV5e70g' }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com'
});

const params = {
  text: 'Texto que deseja converter!',
  voice: 'pt-BR_IsabelaVoice',
  accept: 'audio/wav'
};

textToSpeech
  .synthesize(params)
  .then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    fs.writeFileSync('audio.wav', repairedFile);
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  });
