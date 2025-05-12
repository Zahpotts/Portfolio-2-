export default function Home(){
    return (
        <div>
            <h1>Contact Me</h1>

            <div>
                <p>If you would like to get in touch with me, please fill out the form below!</p>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send</button>

                </form>
            </div>
            <div>
                <h2>Other Ways to Connect</h2>
                <ul>
                    <li>Email: Zahpotts123@gmail.com</li>
                    <li>LinkedIn: <a href="www.linkedin.com/in/isaiah-potts-710848148">Isaiah Potts</a></li>
                    <li>GitHub: <a href="https://github.com/Zahpotts">Zahpotts</a></li>
                </ul>
            </div>
        </div>
    );
}