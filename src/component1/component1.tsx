export default function Component1() {
  return (
    <div className="flex flex-col gap-2 bg-emerald-900 p-2 w-[480px]">
      <div className="flex gap-2 grow">
        <InformationButton item={'games'} value={0} />
        <InformationButton item={'derash'} value={0} />
        <InformationButton item={'players'} value={12} />
        <InformationButton item={'bet'} value={10} />
        <InformationButton item={'call'} value={0} />
      </div>
      <div className="flex gap-2">
        <BingoGrid />
        <div className="flex flex-col gap-2 px-2 grow">
          <CountDown />
          <CurrentCall />
        </div>
      </div>
    </div>
  )
}

function InformationButton({ item, value }: { item: string; value: number }) {
  return (
    <button className="flex flex-col bg-emerald-800 hover:bg-emerald-700 px-2 py-1 rounded-md grow">
      <span>{item}</span> <span>{value}</span>
    </button>
  )
}

interface BingoNumbers {
  B: number[]
  I: number[]
  N: number[]
  G: number[]
  O: number[]
}

function BingoGrid() {
  const bingoNumbers: BingoNumbers = {
    B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    I: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    N: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    G: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    O: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
  }
  return (
    <div className="flex">
      <div className="gap-1 grid grid-cols-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-red-300 rounded-md size-8">
            B
          </div>
          {bingoNumbers.B.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-blue-300 rounded-md size-8">
            I
          </div>
          {bingoNumbers.I.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-green-300 rounded-md size-8">
            N
          </div>
          {bingoNumbers.N.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-orange-300 rounded-md size-8">
            G
          </div>
          {bingoNumbers.G.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-violet-300 rounded-md size-8">
            O
          </div>
          {bingoNumbers.O.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CountDown() {
  return (
    <div className="flex justify-between bg-emerald-950/50 px-4 py-2 rounded-md">
      <span>Countdown</span> <span>25</span>
    </div>
  )
}

function CurrentCall() {
  return (
    <div className="flex justify-between items-center bg-emerald-700 px-4 py-2 rounded-md">
      <span>Current Call</span>
      <span className="bg-red-300 rounded-full size-8"></span>
    </div>
  )
}
