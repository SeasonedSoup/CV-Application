function InformationForm() {
    return (
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" />

            <label htmlFor="telephone">Phone Number: </label>
            <input type="tel" id="telephone" name="telephone" />

        </form>
    )
}

export default InformationForm;