module.exports = () => {
    var date = new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    return new Date(date);
};