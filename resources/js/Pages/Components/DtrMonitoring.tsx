import React from 'react';
import '../../../css/dtrmonitoring.css'; // We'll add styles later

const ContributionGraph = ({ data } : any) => {
    const weeks = 53;
    const daysPerWeek = 7;

    // Days of the week
    const days = ['-', 'Mon', '-', 'Wed', '-', 'Fri', '-'];

    // Months of the year
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Function to determine the color based on the contribution count
    const getColor = (count: number) => {
      if (count === 0) return '#ebedf0'; // No contributions
      if (count < 5) return '#9be9a8'; // 1-4 contributions
      if (count < 10) return '#40c463'; // 5-9 contributions
      if (count < 20) return '#30a14e'; // 10-19 contributions
      return '#216e39'; // 20+ contributions
    };

    // Generate the grid
    const renderGrid = () => {
      const grid = [];
      for (let week = 0; week < weeks; week++) {
        const weekCells = [];
        for (let day = 0; day < daysPerWeek; day++) {
          const contribution = data[week * daysPerWeek + day] || 0;
          const color = getColor(contribution);
          weekCells.push(
            <div
              key={`${week}-${day}`}
              className="contribution-cell"
              style={{ backgroundColor: color }}
              title={`Contributions: ${contribution}`}
            >
                {day}
            </div>

          );
        }
        grid.push(
          <div key={week} className="week-row">
            {weekCells}
          </div>
        );
      }
      return grid;
    };

    // Render month labels
    const renderMonthLabels = () => {
      const monthLabels = [];
      for (let i = 0; i < weeks; i += 5) {
        const monthIndex = Math.floor((i * daysPerWeek) / 30) % 12;
        monthLabels.push(
          <div key={i} className="month-label">
            {months[monthIndex]}
          </div>
        );
      }
      return monthLabels;
    };

    return (
      <div className="contribution-graph-container">
        {/* Days of the week */}
        <div className="days-labels">
          {days.map((day, index) => (
            <div key={index} className="day-label">
              {day}
            </div>
          ))}
        </div>

        {/* Graph and month labels */}
        <div className="graph-and-months">
          <div className="month-labels">{renderMonthLabels()}</div>
          <div className="contribution-graph">{renderGrid()}</div>
        </div>
      </div>
    );
  };

  export default ContributionGraph;
