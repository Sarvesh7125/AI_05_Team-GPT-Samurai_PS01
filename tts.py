from TTS.api import TTS

tts = TTS("tts_models/en/ljspeech/tacotron2-DCA", gpu=False)
tts.tts_to_file(text="Hello, this is an AI voice!", file_path="output.wav")
