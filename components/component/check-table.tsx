/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rReXj6Nm0nC
 */
"use client"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import CheckPieChart from "./check-pie-chart"

import agg_data from '../../data/checks.json';

interface PieChartData {
  id: string;
  value: number;
}

interface TableRowData {
  name: String;
  passedRatio: String;
  pieData: PieChartData[];
}

interface CheckTableProps {
  data?: TableRowData[]; // Making data optional as it has a default value
}

export function CheckTable({ data = agg_data }: CheckTableProps) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] bg-custom-blue">Test Name</TableHead>
          <TableHead className="w-[100px] bg-custom-red">Passed %</TableHead>
          <TableHead className="w-[200px] bg-custom-yellow">Diagram</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((test, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{test.name}</TableCell>
            <TableCell className="font-medium">{test.passedRatio}</TableCell>
            <TableCell className="font-medium">
              <CheckPieChart className="w-[100px] aspect-square" data = {test.pieData} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
