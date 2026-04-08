import React from 'react';

const ProgressPieChart = ({ role, currentLevel, totalLevels }) => {
  const percentage = (currentLevel / totalLevels) * 100;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-pie-chart">
      <svg width="120" height="120" viewBox="0 0 120 120">
        {/* Background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#0A5693"
          strokeWidth="8"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
        {/* Center text */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="hsl(var(--text))"
          fontSize="16"
          fontWeight="bold"
        >
          {currentLevel}/{totalLevels}
        </text>
      </svg>
      <p className="role-name">{role}</p>
    </div>
  );
};

export default ProgressPieChart;
