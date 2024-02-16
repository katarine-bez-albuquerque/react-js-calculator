import { useState } from "react";
import Button from "../../components/button";
import Paragraph from "../../components/paragraph";
import Input from "../../components/input";
import { Calculate } from "../../model/Calculate";
import Footer from "../../components/footer";
import Header from "../../components/header";
/**
 * class Calculator
 */
const calculate: Calculate = new Calculate();
/**
 * Home
 * Home component
*/
const Home = () => {
    {
        /**
         * Estados
         * States
         * */
    }
    const [value, setValue] = useState('');
    const [total, setTotal] = useState('0');
    const [error, setError] = useState('');
    {
        /**
         * Definir valores
         * Set values
         */
    }
    const setValueCalc = (val: string) => {
        calculate.setValue(val);
        setValue(calculate.getValue());
    }
    {
        /**
         * Limpa display
         * Clean display
         */
    }
    const clearDisplay = (val: string) => {
        calculate.setConfig(val);
        setValue(calculate.getValue());
        setTotal(calculate.getTotal());
    }
    {
        /**
         * Obter operação
         * Get operation
         */
    }
    const getOperationCalc = () => {
        calculate.getOperation();
        setTotal(calculate.getTotal());
        setError(calculate.getError());
    }

    return (
        <div id="page">
            <Header title="Calculator" />
            <main id="main">
                <section id="main-section">
                    <article className="box">
                        <section className="box-display">
                            <Paragraph id="error" text={error} />
                            <Input readOnly={true} type="text" name="value" value={value} placeholder="0" />
                            <Paragraph id="total" text={(total ? total : '0') + " ="} />
                        </section>
                    </article>
                    <article className="box">
                        <Button text="CE" onClick={() => clearDisplay('CE')} />
                        <Button text="C" onClick={() => clearDisplay('C')} />
                        <Button text="DEL" onClick={() => clearDisplay('DEL')} />
                        <Button text="/" onClick={() => setValueCalc('/')} />
                    </article>
                    <article className="box">
                        <Button text="7" onClick={() => setValueCalc('7')} />
                        <Button text="8" onClick={() => setValueCalc('8')} />
                        <Button text="9" onClick={() => setValueCalc('9')} />
                        <Button text="x" onClick={() => setValueCalc('x')} />
                    </article>
                    <article className="box">
                        <Button text="4" onClick={() => setValueCalc('4')} />
                        <Button text="5" onClick={() => setValueCalc('5')} />
                        <Button text="6" onClick={() => setValueCalc('6')} />
                        <Button text="-" onClick={() => setValueCalc('-')} />
                    </article>
                    <article className="box">
                        <Button text="1" onClick={() => setValueCalc('1')} />
                        <Button text="2" onClick={() => setValueCalc('2')} />
                        <Button text="3" onClick={() => setValueCalc('3')} />
                        <Button text="+" onClick={() => setValueCalc('+')} />
                    </article>
                    <article className="box">
                        <Button text="0" onClick={() => setValueCalc('0')} />
                        <Button text="." onClick={() => setValueCalc('.')} />
                        <Button text="=" onClick={() => getOperationCalc()} />
                    </article>
                </section>
            </main>
            <Footer copyright="&copy;Calculator 2024 - All rights reserved." />
        </div>
    );
}

export default Home;