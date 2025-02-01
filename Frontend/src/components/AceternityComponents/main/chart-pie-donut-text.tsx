// "use client"

// import * as React from "react"
// import { ResponsiveContainer, Tooltip } from "recharts"

// export type ChartConfig = Record<string, { label: string; color: string }>

// export function ChartContainer({
// //   config,
//   children,
//   className,
// }: {
//   config: ChartConfig
//   children: React.ReactNode
//   className?: string
// }) {
//   return (
//     <div className={className}>
//       <ResponsiveContainer width="100%" height="100%">
//         {children}
//       </ResponsiveContainer>
//     </div>
//   )
// }

// export function ChartTooltip({
//   children,
//   ...props
// }: React.ComponentProps<typeof Tooltip>) {
//   return <Tooltip {...props} content={children} />
// }

// export function ChartTooltipContent({
//   active,
//   payload,
//   label,
//   config,
//   hideLabel = false,
// }: {
//   active?: boolean
//   payload?: Array<{ name: string; value: number }>
//   label?: string
//   config: ChartConfig
//   hideLabel?: boolean
// }) {
//   if (active && payload?.length) {
//     return (
//       <div className="rounded-lg border bg-background p-2 shadow-sm">
//         {!hideLabel && <div className="mb-2 font-medium">{label}</div>}
//         <div className="flex flex-col gap-1">
//           {payload.map((item, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <div
//                 className="h-2 w-2 rounded-full"
//                 style={{ background: config[item.name]?.color }}
//               />
//               <span className="font-medium tabular-nums">
//                 {/* {config[item.name]?.label}: {item.value} */}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   return null
// }

