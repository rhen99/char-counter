import './TextBox.css'
function Textbox({changeCount}) {
    return (
        <section className="TextBox">
            <div className="container Container">
                <textarea onChange={(e) => changeCount(e.target.value.length)} autoFocus placeholder="Write / Paste your text here..." className="TextBoxInput"></textarea>
            </div>
        </section>
    )
}

export default Textbox
