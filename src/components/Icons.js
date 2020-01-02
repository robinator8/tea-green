import styled from 'styled-components'

export const Icon = styled.i`
    font-family: "my-icons";
    font-style: normal;
    font-weight: normal;
    speak: none;
   
    display: inline-block;
    text-decoration: inherit;
    //width: 1em;
    //margin-right: .2em;
    text-align: center;
    /* opacity: .8; */
    margin: auto;
   
    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;
   
    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;
   
    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    //margin-left: .2em;
   
    /* You can be more comfortable with increased icons size */
   
    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   
    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
`
export const Shuffle = `\ue800`
export const Play = '\ue801'
export const Pause = `\ue802`
export const Backward = `\ue803`
export const Forward = `\ue804`
export const Queue = `\ue805`
export const BackArrow = `\ue806`
export const ForwardArrow = `\ue807`
export const Add = `\ue808`
export const Exit = `\ue809`
export const Download = `\ue80a`
export const VolumeHigh = `\ue80b`
export const VolumeMedium = `\ue80c`
export const VolumeLow = `\ue80d`
export const VolumeOff = `\ue80e`