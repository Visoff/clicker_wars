import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [orderVotes, setOrderVotes] = useState<number>(0);
  const [changeVotes, setChangeVotes] = useState<number>(0);
  const [protocol, setProtocol] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(30);

  const finishElection = () => {
    let winner = "Ничья";
    if (orderVotes > changeVotes) winner = "Партия Порядка";
    if (changeVotes > orderVotes) winner = "Партия Перемен";
    const resultString = `Итог: ${winner} (${orderVotes} vs ${changeVotes})`;
    setProtocol(resultString);
    setIsOpen(false);
    setOrderVotes(0);
    setChangeVotes(0);
    setTimeLeft(30);
  };

  useEffect(() => {
    let timer: any;
    if (isOpen && timeLeft > 0) {
      timer = setInterval(() => { setTimeLeft((prev) => prev - 1); }, 1000)
    }
    if (timeLeft === 0 && isOpen) {
      finishElection();
    }
    return () => clearInterval(timer);}, [isOpen, timeLeft]);

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
            <strong>Часы комиссии: {timeLeft} сек.</strong>
            <p></p>
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
