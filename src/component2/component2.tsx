export default function Component2() {
  return (
    <div className="bg-sky-950 w-sm h-fit flex flex-col gap-4 p-2 items-center">
      <div className="flex w-full gap-2 p-2">
        <InformationButton item="Wallet" value={206} />
        <InformationButton item="Active Games" value={1} />
        <InformationButton item="Stake" value={10} />
      </div>
      <GridComponent />
    </div>
  )
}

function GridComponent() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1)
  return (
    <div className="grid w-fit grid-cols-10 gap-1">
      {numbers.map((number) => (
        <div
          key={number}
          className="size-6 bg-sky-900 rounded-md flex items-center justify-center text-sm"
        >
          {number}
        </div>
      ))}
    </div>
  )
}

// InformationButton component - individual stat display
interface InformationButtonProps {
  item: string
  value: number
}
function InformationButton({ item, value }: InformationButtonProps) {
  return (
    <button className="flex flex-col bg-sky-900 hover:bg-sky-800 px-2 py-1 rounded-2xl grow flex-1">
      <span className="whitespace-nowrap">{item}</span> <span>{value}</span>
    </button>
  )
}
