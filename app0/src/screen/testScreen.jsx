import { useEffect } from "react";

const TestScreen = () => {
    useEffect(() => {
        
       fetch("http://localhost:5001").then(console.log);
          
        });

        return (
            <h1>Test OK</h1>
        )

}
export default TestScreen