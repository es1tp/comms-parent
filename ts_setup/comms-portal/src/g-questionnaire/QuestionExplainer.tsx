import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { ExamApi } from '@/api-exam';
import { useLocale } from '@dxs-ts/gamut';


export const QuestionExplainer: React.FC<{ question: ExamApi.Question }> = ({ question }) => {
  const theme = useTheme();
  const { locale } = useLocale();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const size = isSmallScreen ? 30 : isLargeScreen ? 32 : 41;

  const instruction = "This is a multiple choice question." +
    "Please translate this question and its answers into English." +
    "Then, tell which of the answers is correct and explain why that answer is correct and the others are incorrect:\n\n";

  const formattedQuestion = `${question.text}\r\n`
  const formattedAnswers = question.answers.map((a, i) => `${i + 1}. ${a.text}`).join("\n");
  const textToSend = `${instruction}${formattedQuestion}\n\n${formattedAnswers}`;


  function handleLeChat(text: string) {
    const encodedText = encodeURIComponent(text);
    const leChatUrl = `https://chat.mistral.ai/chat?q=${encodedText}`;
    window.open(leChatUrl, '_blank');
  }

  return (
    <>
      <svg
        onClick={() => handleLeChat(textToSend)}
        style={{ cursor: 'pointer' }}
        width={size}
        height={(size * 29) / 41} // Maintain the aspect ratio
        viewBox="0 0 41 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.7072 0H5.85352V5.79928H11.7072V0Z" fill="#FFD800"></path>
        <path d="M35.1252 0H29.2715V5.79928H35.1252V0Z" fill="#FFD800"></path>
        <path d="M17.561 5.79883H5.85352V11.5981H17.561V5.79883Z" fill="#FFAF00"></path>
        <path d="M35.1254 5.79883H23.418V11.5981H35.1254V5.79883Z" fill="#FFAF00"></path>
        <path d="M35.1258 11.5977H5.85352V17.3969H35.1258V11.5977Z" fill="#FF8205"></path>
        <path d="M11.7072 17.3984H5.85352V23.1977H11.7072V17.3984Z" fill="#FA500F"></path>
        <path d="M23.4162 17.3984H17.5625V23.1977H23.4162V17.3984Z" fill="#FA500F"></path>
        <path d="M35.1252 17.3984H29.2715V23.1977H35.1252V17.3984Z" fill="#FA500F"></path>
        <path d="M17.5648 23.2012H0V29.0005H17.5648V23.2012Z" fill="#E10500"></path>
        <path d="M40.9828 23.2012H23.418V29.0005H40.9828V23.2012Z" fill="#E10500"></path>
      </svg>
  </>);
};

export default QuestionExplainer;
