/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rReXj6Nm0nC
 */
"use client"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBar } from "@nivo/bar"
import items from "../../data/item_types.json"
import { Table, TableRow, TableBody, TableCell, TableHeader, TableHead } from "@/components/ui/table"

export function ItemTypes() {
    return (
        <Table className="w-full">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px] bg-custom-blue">Item Type</TableHead>
                    <TableHead className="w-[100px] bg-custom-red">Number</TableHead>
                    <TableHead className="w-[200px] bg-custom-yellow">Part</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {items.map((test, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">{test.id}</TableCell>
                    <TableCell className="font-medium">{test.value}</TableCell>
                    <TableCell className="font-medium">{test.part}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    )
//   return (
//     <div className="w-full">
//         {/* <ResponsivePie
//             data = {items}
//             sortByValue
//             margin={{ top: 100, right: 100, bottom: 100, left: 100 }}
//             innerRadius={0.4}
//             cornerRadius={10}
//             enableArcLabels={false}
//             animate
//             isInteractive
//             activeOuterRadiusOffset={10}
//         /> */}
//         {/* <ResponsiveBar
//             data = {items}
//             key = {"value"}
//             indexBy={"id"}
//             layout="horizontal"
//             colorBy="id"
//         /> */}

//     </div>
//   )
}