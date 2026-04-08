import React from 'react';
import ResumeBuilder from '../components/resumebuild';
import {useEffect } from "react";

const ResumePage = () => {
    useEffect(() => {
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <div>
      <ResumeBuilder />
    </div>
    </>
  );
};

export default ResumePage;
