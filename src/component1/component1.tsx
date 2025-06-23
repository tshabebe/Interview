export default function Component1() {
  return (
    <div className="flex flex-col gap-2 bg-emerald-900 p-2 w-[380px]">
      <div className="flex gap-2 grow">
        <InformationButton item={'games'} value={0} />
        <InformationButton item={'derash'} value={0} />
        <InformationButton item={'players'} value={12} />
        <InformationButton item={'bet'} value={10} />
        <InformationButton item={'call'} value={0} />
      </div>
      <div className="flex gap-2">
        <BingoGrid />
        <div className="flex flex-col gap-3 px-2 grow">
          <div className="flex flex-col gap-2">
            <CountDown />
            <CurrentCall />
          </div>
          <div className="bg-emerald-600 rounded-md h-4"></div>
          <GridWithCartelaNumber />
          <Bingo />
        </div>
      </div>
      <div className="flex justify-between gap-4 px-4">
        <Leave />
        <Refresh />
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
          <div className="flex justify-center items-center bg-red-300 rounded-md size-6 text-sm">
            B
          </div>
          {bingoNumbers.B.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-6 text-sm">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-blue-300 rounded-md size-6 text-sm">
            I
          </div>
          {bingoNumbers.I.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-6 text-sm">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-green-300 rounded-md size-6 text-sm">
            N
          </div>
          {bingoNumbers.N.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-6 text-sm">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-orange-300 rounded-md size-6 text-sm">
            G
          </div>
          {bingoNumbers.G.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-6 text-sm">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-violet-300 rounded-md size-6 text-sm">
            O
          </div>
          {bingoNumbers.O.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-6 text-sm">
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
      <span className="font-semibold">Countdown</span>{' '}
      <span className="text-sm">25</span>
    </div>
  )
}

function CurrentCall() {
  return (
    <div className="flex justify-between items-center bg-emerald-700 px-4 py-2 rounded-md">
      <span className="font-semibold">Current Call</span>
      <span className="bg-red-300 rounded-full size-8"></span>
    </div>
  )
}

function GridWithCartelaNumber() {
  const bingoNumbersWithCartela = {
    B: [6, 4, 5, 13, 12],
    I: [17, 25, 30, 29, 28],
    N: [42, 43, '*', 45, 33],
    G: [54, 59, 57, 58, 55],
    O: [73, 66, 64, 67, 71],
  }
  return (
    <div className="flex justify-center">
      <div className="gap-1 grid grid-cols-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-red-300 rounded-full size-8">
            B
          </div>
          {bingoNumbersWithCartela.B.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-blue-300 rounded-full size-8">
            I
          </div>
          {bingoNumbersWithCartela.I.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-green-300 rounded-full size-8">
            N
          </div>
          {bingoNumbersWithCartela.N.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-orange-300 rounded-full size-8">
            G
          </div>
          {bingoNumbersWithCartela.G.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center items-center bg-violet-300 rounded-full size-8">
            O
          </div>
          {bingoNumbersWithCartela.O.map((num) => (
            <div className="flex justify-center items-center bg-emerald-800 hover:bg-emerald-900 rounded-md size-8">
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Bingo() {
  return (
    <button className="bg-orange-300 hover:bg-orange-400 px-4 py-2 rounded-full text-orange-950">
      Bingo
    </button>
  )
}

function Refresh() {
  return (
    <button className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded-full text-blue-950 grow">
      Refresh
    </button>
  )
}

function Leave() {
  return (
    <button className="bg-red-300 hover:bg-red-400 px-4 py-2 rounded-full text-red-950 grow hover:bgred-400">
      Leave
    </button>
  )
}
