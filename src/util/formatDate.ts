const formatDate = (date: string) => {
    const [year, month, day] = date.slice(0, 10).split("-");
    return `${month}/${day}/${year}`;
};

export default formatDate;
