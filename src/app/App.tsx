import { useState } from 'react';
import RemoteTodoTableWrapper from '../features/RemoteTodoTable';
import { AppContainer, StyledButton } from './App.styles';

function App() {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(!showTable);
  };

  return (
    <AppContainer>
      <StyledButton onClick={handleButtonClick}>
        {showTable ? 'Скрыть таблицу Todo' : 'Показать таблицу Todo'}
      </StyledButton>
      {showTable && <RemoteTodoTableWrapper />}
    </AppContainer>
  );
}

export default App;
