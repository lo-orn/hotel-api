export const GuestForm = () => {
    return (
        <form>
            <div>
                <label htmlFor="firstName">Förnamn</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>

            <div>
                <label htmlFor="lastName">Efternamn</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>

            <button type="submit">Registrera gäst</button>
        </form>
    );
};