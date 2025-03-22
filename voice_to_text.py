import sounddevice as sd
import wavio
import keyboard
import whisper

samplerate = 16000  # Whisper ke liye recommended sample rate
filename = "audio.wav"
audio_data = []

print("Recording... (Press SPACE to stop)")

# Continuous recording until space is pressed
while True:
    chunk = sd.rec(int(samplerate * 0.5), samplerate=samplerate, channels=1, dtype='int16')
    sd.wait()
    audio_data.append(chunk)
    
    if keyboard.is_pressed("space"):  # Space dabate hi recording band
        break

# Convert list to numpy array
import numpy as np
audio_data = np.concatenate(audio_data, axis=0)

# Save the recorded audio
wavio.write(filename, audio_data, samplerate, sampwidth=2)
print(f"Recording saved as {filename}")


model = whisper.load_model("base")
result = model.transcribe("audio.wav")


print("Converted Text:", result)
