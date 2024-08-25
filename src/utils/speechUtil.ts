import { franc } from "franc";
import { iso6393 } from "iso-639-3";

export const getLangCode = (isoCode: string): string => {
  const lang = iso6393.find((lang) => lang.iso6393 === isoCode);
  if (lang && lang.iso6393 === "cmn") {
    return "zh";
  }
  return lang ? lang.iso6391 || "en" : "en";
};

export const speakText = (
  text: string,
  onEnd?: () => void,
  onPause?: () => void
) => {
  const detectedLang = franc(text);
  const langCode = getLangCode(detectedLang);

  const utterance = new SpeechSynthesisUtterance(text.replace(/\n/g, " "));
  utterance.lang = langCode;
  utterance.rate = 0.6;

  if (onEnd) {
    utterance.onend = () => onEnd();
  }
  if (onPause) {
    utterance.onpause = () => onPause();
  }

  window.speechSynthesis.speak(utterance);
};

export const toggleSpeech = (
  text: string,
  isSpeaking: boolean,
  setIsSpeaking: (isSpeaking: boolean) => void
) => {
  if (isSpeaking) {
    window.speechSynthesis.pause();
    setIsSpeaking(false);
  } else {
    new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();

    speakText(
      text,
      () => setIsSpeaking(false),
      () => setIsSpeaking(false)
    );
    setIsSpeaking(true);
  }
};
