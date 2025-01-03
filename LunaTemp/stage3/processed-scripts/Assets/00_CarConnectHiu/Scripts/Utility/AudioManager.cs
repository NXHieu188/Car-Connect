using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : Singleton<AudioManager>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipClick, clipImpact, clipCarExit, clipShipMove, clipRun, clipLose, clipWin;

    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }

    public void PlaySoundClick()
    {
        PlaySoundFX(clipClick);
    }
    public void PlaySoundImpact()
    {
        PlaySoundFX(clipImpact);
    }
    public void PlaySoundRun()
    {
        PlaySoundFX(clipRun);
    }
    public void PlaySoundCarExit()
    {
        PlaySoundFX(clipCarExit);
    }
    public void PlaySoundShipMove()
    {
        PlaySoundFX(clipShipMove);
    }
    public void PlaySoundClipLose()
    {
        PlaySoundFX(clipLose);
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