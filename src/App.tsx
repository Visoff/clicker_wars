import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderVotes, setOrderVotes] = useState<number>(0);
  const [changeVotes, setChangeVotes] = useState<number>(0);
  const [protocol, setProtocol] = useState<string>("");
  const finishElection = () => {
    let winner = "Ничья";
    if (orderVotes > changeVotes) winner = "Партия Порядка";
    if (changeVotes > orderVotes) winner = "Партия Перемен";
    const resultString = `Итог: ${winner} (${orderVotes} vs ${changeVotes})`;
    setProtocol(resultString);
    setIsOpen(false);
    setOrderVotes(0);
    setChangeVotes(0);
  };
  return (
    <>
      <div>
        <h1>Избирательный участок</h1>
        {!isOpen ? (
          <div>
            <button onClick={() => setIsOpen(true)}>
              Открыть участок
            </button>
            {protocol && (
              <div style={{ marginTop: '20px', border: '1px solid gray' }}>
                <h3>Последний протокол:</h3>
                <p>{protocol}</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button onClick={() => setOrderVotes(orderVotes + 1)}>
              Партии Порядка ({orderVotes})
            </button>
            <button onClick={() => setChangeVotes(changeVotes + 1)}>
              Партии Перемен ({changeVotes})
            </button>
            <p>Общее кол-во голосов: {orderVotes + changeVotes}</p>

            <button onClick={finishElection} style={{ color: 'red' }}>
              Завершить досрочно
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default App
