import React from 'react';
import { ResponsivePie } from '@nivo/pie';

interface PieChartProps {
  className?: string;
  passed: number;
  failed: number;
}

const PieChart: React.FC<PieChartProps> = ({ className, passed, failed }) => {
  const data = [
    { id: "Failed", value: failed },
    { id: "Passed", value: passed },
  ];

  return (
    <div className={className}>
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        cornerRadius={0}
        padAngle={0}
        borderWidth={1}
        borderColor={"#ffffff"}
        enableArcLinkLabels={false}
        enableArcLabels={false}
        colors={["#FFC72C", "#3EB1C8"]}
        theme={{
          labels: {
            text: {
              fontSize: "18px",
            },
          },
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

export default PieChart;
