using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : Singleton<AudioManager>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipPass, clipLose,clipAwesome,clipWin,clipWarning;

    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }

    public void PlaySoundClipPass()
    {
        PlaySoundFX(clipPass);
    }
    public void PlaySoundClipWarning()
    {
        PlaySoundFX(clipWarning);
    }
    public void PlaySoundClipLose()
    {
        PlaySoundFX(clipLose);
    }
    public void PlaySoundClipAwesome()
    {
        PlaySoundFX(clipAwesome);
    }
    public void PlaySoundClipWin()
    {
        PlaySoundFX(clipWin);
    }
    void PlaySoundFX(AudioClip audioClip)
    {
        audioSourceFX.PlayOneShot(audioClip);
    }
    public void PlaySound()
    {
        audioSourceBG.volume = 1;
        audioSourceFX.volume = 1;
    }
    public void StopSound()
    {
        audioSourceBG.volume = 0;
        audioSourceFX.volume = 0;
    }
}