import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { List } from 'postcss/lib/list';

interface PieChartData {
  id: string;
  value: number;
}

interface PieChartProps {
  className?: string;
  data: PieChartData[];
}

const CheckPieChart: React.FC<PieChartProps> = ({ className, data }) => {
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

export default CheckPieChart;
