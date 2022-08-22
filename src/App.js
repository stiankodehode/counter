import "./App.css";
import { useState, useEffect } from "react";
import {
    StyledHeading,
    ButtonContainer,
    StyledButton,
} from "./components/styledComponents";

function App() {
    const [num, setNum] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setNum((oldNum) => oldNum + 1);
        }, 1000);
    }, []);

    function changeNum(e) {
        setNum((oldNum) => (e === "plus" ? oldNum + 1 : oldNum - 1));
    }

    return (
        <div className="App">
            <StyledHeading>{num}</StyledHeading>
            <ButtonContainer>
                <StyledButton
                    onClick={() => {
                        changeNum("plus");
                    }}
                >
                    Add
                </StyledButton>
                <StyledButton onClick={changeNum}>Remove</StyledButton>
            </ButtonContainer>
        </div>
    );
}

export default App;
