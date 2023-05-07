const validateAnswer = async (answer) => {
    if (answer === "") {
        return 'Field cannot be blank! Please enter applicable input.';
    }
    return true;
};

module.exports = validateAnswer;