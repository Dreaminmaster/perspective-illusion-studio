"""Original ten-second procedural synth atmosphere; no samples or copyrighted soundtrack."""
import numpy as np, wave
from pathlib import Path
fs=48000; T=10
n=fs*T
t=np.arange(n,dtype=np.float64)/fs
rng=np.random.default_rng(2077)
left=np.zeros(n,dtype=np.float64);right=np.zeros(n,dtype=np.float64)
def note(freq, gate, start, stop, vol=.1, pan=.5, mod=.007):
    a=int(start*fs);b=min(n,int(stop*fs));k=np.arange(b-a,dtype=np.float64)/fs
    if b<=a:return
    vel=np.exp(-k*(1.6/gate))*.30+.70
    env=np.minimum(1,k/.06) * np.minimum(1,np.maximum(0,(stop-start-k)/.20))
    wav=(np.sin(2*np.pi*freq*k + mod*np.sin(2*np.pi*.5*k))*0.67 + .19*np.sin(2*np.pi*freq*2.01*k)+.14*np.sin(2*np.pi*freq*.503*k))
    part=vol*env*vel*wav
    left[a:b] += part*np.cos(pan*np.pi/2);right[a:b] += part*np.sin(pan*np.pi/2)
# dark atmospheric pads, chord structure written for this clip
chords=[
    [146.83,174.61,220.0,261.63], # Dm7
    [116.54,146.83,174.61,220.0], # Bbmaj
    [98.0,146.83,174.61,233.08], # Gm
    [110.,164.81,196.0,261.63], # A
]
for j,chord in enumerate(chords):
    st=j*2.5
    for k,f in enumerate(chord):
        note(f,3.0,st,min(T,st+2.5),vol=.040,pan=.27+k*.16,mod=.13)
        note(f*.998,3.0,st,min(T,st+2.5),vol=.025,pan=.75-k*.12,mod=.33)
# pulsing bass at 120 bpm, variable rhythm
bass=[36.708,29.135,24.5,27.5]
for beat in range(20):
    st=beat*.5
    f=bass[min(3,beat//5)]
    a=int(st*fs); b=min(n,a+int(.42*fs)); k=np.arange(b-a,dtype=np.float64)/fs
    bass_tone=(np.sin(2*np.pi*f*k)*.62+np.sin(2*np.pi*f*2.006*k)*.22+np.sin(2*np.pi*f*3.02*k)*.10)
    env=np.exp(-k*5)*np.minimum(1,k*400)
    part=bass_tone*env*.18
    left[a:b]+=part*.70;right[a:b]+=part*.70
# cyber rhythm: kicks and industrial snare/noise hits
for beat in range(20):
    st=beat*.5
    a=int(st*fs); dur=int(.34*fs);b=min(n,a+dur); k=np.arange(b-a,dtype=np.float64)/fs
    freq=53+85*np.exp(-k*38)
    phase=2*np.pi*(53*k+85*(1-np.exp(-k*38))/38)
    kick=.12*np.sin(phase)*np.exp(-k*16)
    left[a:b]+=kick;right[a:b]+=kick
    if beat%2==1:
        st2=st;a=int(st2*fs);dur=int(.24*fs);b=min(n,a+dur);k=np.arange(b-a,dtype=np.float64)/fs
        noise=rng.standard_normal(b-a)
        bright=np.r_[noise[0],np.diff(noise)]
        sn=.025*bright*np.exp(-k*19)
        left[a:b]+=sn*.66;right[a:b]+=sn*.74
for h in range(40):
    a=int(h*.25*fs);b=min(n,a+int(.06*fs));k=np.arange(b-a,dtype=np.float64)/fs
    noise=rng.standard_normal(b-a)
    sn=(noise - np.r_[noise[0],noise[:-1]])*.008*np.exp(-k*58)
    left[a:b]+=sn*(.8 if h%2 else .5);right[a:b]+=sn*(.5 if h%2 else .9)
# bright delayed call-outs, original simple electronic motif
pattern=[293.66,349.23,392.0,440.,587.33,523.25,440.,392.]
for k,f in enumerate(pattern):
    st=1.25+k*1.0
    for delay,vol in [(0,.032),(.16,.013),(.32,.007)]:
        if st+delay>=T:continue
        note(f,.65,st+delay,min(T,st+delay+.36),vol=vol,pan=.28 if k%2 else .72,mod=.09)
# subtle noise floor
noise=rng.standard_normal(n)
smooth=np.convolve(np.ones(60)/60,noise,'same')
left+=smooth*.013; right+=np.roll(smooth,113)*.013
# tiny edge fade; avoid clicks
fade=int(.045*fs)
w=np.ones(n);w[:fade]=np.linspace(0,1,fade);w[-fade:]=np.linspace(1,0,fade)
stereo=np.stack([left*w,right*w],axis=-1)
maxabs=max(1, np.abs(stereo).max()/0.87)
pcm=(np.clip(stereo/maxabs,-1,1)*32767).astype('<i2')
with wave.open('night_city_2077_original_synth.wav','wb') as out:
    out.setnchannels(2);out.setsampwidth(2);out.setframerate(fs);out.writeframes(pcm.tobytes())
print('WAV saved: 10 s 48 kHz stereo, original synth.')
