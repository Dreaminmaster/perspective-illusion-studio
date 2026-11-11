"""Original generated soundtrack, no third-party music or samples."""
import numpy as np, wave
FS=48000; N=FS*10; t=np.arange(N)/FS
L=np.zeros(N);R=np.zeros(N)
rng=np.random.default_rng(1077)
def add(w,at,pan=.5):
 a=int(at*FS);b=min(N,a+len(w))
 if b>a:
  L[a:b]+=w[:b-a]*np.cos(pan*np.pi/2); R[a:b]+=w[:b-a]*np.sin(pan*np.pi/2)
def lyre(f,at,vol=.1):
 q=np.arange(int(.85*FS))/FS
 w=sum(c*np.sin(2*np.pi*f*k*q)*np.exp(-(2+k)*q) for k,c in [(1,.73),(2,.27),(3,.12),(4,.06)])
 add(w*vol*(1-np.exp(-q*300)),at,.2 if int(at*10)%2 else .8)
def pad(f,at,d=2.5,v=.05):
 q=np.arange(int(d*FS))/FS
 w=(.71*np.sin(2*np.pi*f*q)+.22*np.sin(2*np.pi*f*2.01*q)) * np.minimum(1,q/.5)*np.minimum(1,(d-q)/.6)
 add(np.maximum(0,1)*w*v,at,.5)
def flute(f,at,d=1.4):
 q=np.arange(int(d*FS))/FS
 w=(np.sin(2*np.pi*f*q+.012*np.sin(2*np.pi*4.6*q))+.1*np.sin(2*np.pi*2*f*q))
 env=np.minimum(1,q/.2)*np.minimum(1,(d-q)/.3)
 add(w*.033*np.maximum(env,0),at,.55)
chords=[(146.83,220,293.66),(130.81,196,261.63),(110,164.81,220),(146.83,220,293.66)]
for i,ch in enumerate(chords):
 for f in ch:pad(f*.5,i*2.5,2.55,.035)
melody=[293.66,440,349.23,523.25,440,392,261.63,392,329.63,523.25,392,349.23,220,329.63,392,440,392,329.63,293.66,349.23,440,392,349.23,293.66]
for j,f in enumerate(melody):lyre(f,j*10/24,.074)
for at,f,d in [(0,587.33,1.5),(2,523.25,1.4),(3.7,440,1.4),(5.4,587.33,1.3),(7,659.26,1.2),(8.3,587.33,1.5)]:flute(f,at,d)
for at,f in [(0,880),(2.5,784),(5,659.26),(7.5,880)]:
 q=np.arange(int(1.8*FS))/FS
 add(.035*(np.sin(2*np.pi*f*q)+.35*np.sin(2*np.pi*2.03*f*q))*np.exp(-q*2),at,.25)
noise=rng.standard_normal(N)
F=np.fft.rfft(noise);hz=np.fft.rfftfreq(N,1/FS);water=np.fft.irfft(F*np.exp(-hz/1100),N)
water=.006*water/max(np.std(water),.01)
L+=water;R+=np.roll(water,720)
fade=int(.3*FS);env=np.ones(N);env[:fade]=np.linspace(0,1,fade);env[-fade:]=np.linspace(1,0,fade)
st=np.stack([L*env,R*env],1);st/=max(1,np.max(np.abs(st))/.9)
pcm=(np.clip(st,-1,1)*32767).astype('<i2')
with wave.open('aeterna_original_score.wav','wb') as w:
 w.setnchannels(2);w.setsampwidth(2);w.setframerate(FS);w.writeframes(pcm.tobytes())
print('Original 10s stereo orchestral lyre + flute + temple chimes + fountain soundscape.')
