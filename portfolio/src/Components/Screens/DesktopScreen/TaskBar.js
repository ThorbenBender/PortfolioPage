import React from "react";
import WindowsButton from "./TaskBarComponents/WindowsButton";
import InterviewPlanner from "./TaskBarComponents/InterviewPlanner";
import ContactMe from "./TaskBarComponents/ContactMe";
import TimeDisplay from "./TaskBarComponents/TimeDisplay";

function TaskBar() {
  return (
    <div>
      <WindowsButton />
      <InterviewPlanner />
      <ContactMe />
      <TimeDisplay />
    </div>
  );
}

export default TaskBar;
