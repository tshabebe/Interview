// Main BingoApp component - starts from the top
export default function BingoApp() {
  return (
    <div className="flex flex-col gap-2 bg-sky-950 p-2 w-sm">
      <InformationBar />
      <GameArea />
      <ActionBar />
    </div>
  )
}

// InformationBar component - displays game statistics
function InformationBar() {
  return (
    <div className="flex gap-2 grow">
      <InformationButton item={'games'} value={0} />
      <InformationButton item={'derash'} value={0} />
      <InformationButton item={'players'} value={12} />
      <InformationButton item={'bet'} value={10} />
      <InformationButton item={'call'} value={0} />
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
    <button className="flex flex-col bg-sky-900 flex-1 hover:bg-sky-800 px-2 py-1 rounded-md grow">
      <span>{item}</span> <span>{value}</span>
    </button>
  )
}

// GameArea component - contains main game elements
function GameArea() {
  return (
    <div className="flex gap-2">
      <BingoGrid />
      <GameControls />
    </div>
  )
}

// BingoGrid component - main bingo board
function BingoGrid() {
  const bingoNumbers = {
    B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    I: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    N: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    G: [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    O: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
  }

  return (
    <div className="flex bg-sky-800 px-2 py-2 rounded-md">
      <div className="gap-1 grid grid-cols-5">
        <BingoColumn letter="B" numbers={bingoNumbers.B} color="red" />
        <BingoColumn letter="I" numbers={bingoNumbers.I} color="blue" />
        <BingoColumn letter="N" numbers={bingoNumbers.N} color="green" />
        <BingoColumn letter="G" numbers={bingoNumbers.G} color="orange" />
        <BingoColumn letter="O" numbers={bingoNumbers.O} color="violet" />
      </div>
    </div>
  )
}

// BingoColumn component - single column of bingo grid
interface BingoColumnProps {
  letter: string
  numbers: number[]
  color: 'red' | 'blue' | 'green' | 'orange' | 'violet'
}

function BingoColumn({ letter, numbers, color }: BingoColumnProps) {
  const colorClasses = {
    red: 'bg-red-500 text-red-100',
    blue: 'bg-blue-500 text-blue-100',
    green: 'bg-green-500 text-green-100',
    orange: 'bg-orange-500 text-orange-100',
    violet: 'bg-violet-500 text-violet-100',
  }

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex justify-center font-semibold items-center ${colorClasses[color]} rounded-md size-6 text-sm`}
      >
        {letter}
      </div>
      {numbers.map((num) => (
        <div
          key={num}
          className="flex justify-center items-center bg-sky-700 hover:bg-sky-600 rounded-md size-6 text-sm"
        >
          {num}
        </div>
      ))}
    </div>
  )
}

// GameControls component - game state and controls
function GameControls() {
  return (
    <div className="flex flex-col gap-3 px-2 grow">
      <div className="flex flex-col gap-2">
        <CountDown />
        <CurrentCall />
      </div>
      <div className="bg-sky-600 rounded-md h-4"></div>
      <CartelaGrid />
      <BingoButton />
    </div>
  )
}

// CountDown component - game timer
function CountDown() {
  return (
    <div className="flex justify-between bg-sky-800 px-4 text-sky-400 py-2 rounded-md">
      <span className="font-semibold">Countdown</span>
      <span className="text-sm">25</span>
    </div>
  )
}

// CurrentCall component - current called number
function CurrentCall() {
  return (
    <div className="flex justify-between items-center bg-sky-600 px-4 py-2 rounded-md">
      <span className="font-semibold">Current Call</span>
      <span className="bg-red-400 rounded-full size-8"></span>
    </div>
  )
}

// CartelaGrid component - player's bingo card
function CartelaGrid() {
  const bingoNumbersWithCartela = {
    B: [6, 4, 5, 13, 12],
    I: [17, 25, 30, 29, 28],
    N: [42, 43, '*', 45, 33],
    G: [54, 59, 57, 58, 55],
    O: [73, 66, 64, 67, 71],
  }

  return (
    <div className="gap-1 grid grid-cols-5 px-2 py-2 bg-sky-900 rounded-md">
      <CartelaColumn
        letter="B"
        numbers={bingoNumbersWithCartela.B}
        color="red"
      />
      <CartelaColumn
        letter="I"
        numbers={bingoNumbersWithCartela.I}
        color="blue"
      />
      <CartelaColumn
        letter="N"
        numbers={bingoNumbersWithCartela.N}
        color="green"
      />
      <CartelaColumn
        letter="G"
        numbers={bingoNumbersWithCartela.G}
        color="orange"
      />
      <CartelaColumn
        letter="O"
        numbers={bingoNumbersWithCartela.O}
        color="violet"
      />
    </div>
  )
}

// CartelaColumn component - single column of player's card
interface CartelaColumnProps {
  letter: string
  numbers: (number | string)[]
  color: 'red' | 'blue' | 'green' | 'orange' | 'violet'
}

function CartelaColumn({ letter, numbers, color }: CartelaColumnProps) {
  const colorClasses = {
    red: 'bg-red-500 text-red-100',
    blue: 'bg-blue-500 text-blue-100',
    green: 'bg-green-500 text-green-100',
    orange: 'bg-orange-500 text-orange-100',
    violet: 'bg-violet-500 text-violet-100',
  }

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`flex justify-center font-semibold items-center ${colorClasses[color]} rounded-full size-8`}
      >
        {letter}
      </div>
      {numbers.map((num, index) => (
        <div
          key={index}
          className="flex justify-center items-center bg-sky-200 text-sky-900 hover:bg-sky-100 rounded-md size-8"
        >
          {num}
        </div>
      ))}
    </div>
  )
}

// BingoButton component - call bingo button
function BingoButton() {
  return (
    <button className="bg-orange-500 hover:bg-orange-400 px-4 py-2 rounded-full text-orange-100">
      Bingo
    </button>
  )
}

// ActionBar component - bottom action buttons
function ActionBar() {
  return (
    <div className="flex justify-between gap-4 px-4">
      <LeaveButton />
      <RefreshButton />
    </div>
  )
}

// LeaveButton component - leave game button
function LeaveButton() {
  return (
    <button className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-full text-red-100 grow">
      Leave
    </button>
  )
}

// RefreshButton component - refresh game button
function RefreshButton() {
  return (
    <button className="bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-full text-sky-100 grow">
      Refresh
    </button>
  )
}
